import React from 'react'

type ErrorInfo = { componentStack: unknown }
interface Props {
  children: React.ReactNode
}
interface State {
  error: Error | undefined
  errorInfo: ErrorInfo | undefined
  errorName: string
  errorMessage: string
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      error: undefined,
      errorInfo: undefined,
      errorMessage: '',
      errorName: '',
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorMessage: error.message.split('\n')[0],
      errorName: error.name,
      errorInfo: errorInfo,
    })
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h3>Problem with rendering:</h3>
          <div className="font-bold">
            <h3>{`${this.state.errorName ?? 'Error'}:`}</h3>
            <p>{this.state.errorMessage && this.state.errorMessage}</p>
          </div>
          <details open style={{ whiteSpace: 'pre-wrap' }} className="font-medium">
            <summary>Stack details</summary>
            {this.state.error && this.state.error.toString()}
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }

    return this.props.children
  }
}
