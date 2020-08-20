import React from 'react';

type State = {
  hasError: boolean;
};
type Props = {
  fallback?: React.ReactNode;
};
export default class ErrorBoundary extends React.Component<Props, State> {
  state = { hasError: false };

  static defaultProps: Props = {
    fallback: <h1>Something went wrong.</h1>,
  };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}
