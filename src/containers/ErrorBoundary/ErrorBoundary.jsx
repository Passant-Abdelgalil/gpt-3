import React, { Component } from "react";
import styles from "./ErrorBoundary.module.scss";
import errorImage from "../../assets/error.webp";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  render() {
    if (this.state.hasError)
      return (
        <div className={`container ${styles["error"]}`}>
          <h1 className={`gradient__text ${styles["error__title-1"]}`}>
            Congratulations!
          </h1>
          <h2 className={styles["error__title-2"]}>You've just found a bug</h2>
          <p className={styles["error__message"]}>
            I'll be grateful to you if you report it
          </p>
          <img src={errorImage} alt="error" className={styles['error__img']}/>
        </div>
      );

    return this.props.children;
  }

  // error boundary

  static getDerivedStateFromError(error) {
    return { ...this.state, hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }
}
export default ErrorBoundary;
