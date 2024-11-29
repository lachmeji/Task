import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false, errorInfo: null };

  // 当组件树中的任何地方抛出错误时被调用
  static getDerivedStateFromError(error) {
    
    return { hasError: true };
  }

  
  componentDidCatch(error, info) {
    
    console.error('错误捕获:', error, info);
  }

  render() {
    if (this.state.hasError) {
     
      return <h2>出了点问题，请稍后再试！</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
