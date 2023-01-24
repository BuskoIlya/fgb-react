import React from 'react';
import { Navigate } from 'react-router-dom';

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(e) {
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    console.error(error.message);
  }

  render () {
    if (this.state.hasError) {
      return <Navigate to="error" />
    }
    return this.props.children;
  }
}

export default ErrorBoundary;