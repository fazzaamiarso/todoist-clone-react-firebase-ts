import { Container, Text } from "@chakra-ui/layout";
import React, { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Container centerContent top="50%">
          <Text>Ooops... There is something wrong</Text>
          <Link to="/app/inbox">Go back to home</Link>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
