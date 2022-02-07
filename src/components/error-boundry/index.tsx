
import React from 'react'
import ErrorIndicator from '../error-indicator'


interface ErrorBoundryProps {
    component?: React.ComponentType
} 

interface ErrorState {
    hasError: Boolean
}
export default class ErrorBoundry extends React.Component< ErrorBoundryProps, ErrorState > {

    state : ErrorState  = {
        hasError: false,
      }
    
      componentDidCatch() {
        this.setState({ hasError: true })
      }
    
      render() {
        if (this.state.hasError) return <ErrorIndicator />
        return this.props.children
      }

}