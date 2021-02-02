// React libs
import { Component } from 'react';
import PropTypes from 'prop-types';
// Common
import Common from '../../Resources/Common/index';
// Type
import * as Types from './ErrorBoundary.type';

/* @TODO : replace class definition by function and hook (for catch) */
class ErrorBoundary extends Component<
  Types.IErrorBoundaryProps,
  Types.IErrorBoundaryState
> {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  constructor(props: Types.IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError && process.env.NODE_ENV !== 'development') {
      window.location.replace(`/${Common.Routes.routeError}/500`);
    }
    return children;
  }
}

export default ErrorBoundary;
