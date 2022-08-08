import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./NotImplemented.module.scss";

import notImplementedImage from "../../assets/not-implemented.png";

const NotImplemented = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div
          className={styles["overlay"]}
          onClick={props.hideOverlay}
          aria-hidden="true"
        >
          <div
            className={`container ${styles["not-implemented"]}`}
            onClick={props.hideOverlay}
          >
            <h1
              className={`gradient__text ${styles["not-implemented__title"]}`}
            >
              This feature is not implemented yet.
            </h1>
            <p className={styles["not-implemented__message"]}>
              Enjoy the design :)
            </p>
            <img
              src={notImplementedImage}
              alt="error"
              className={styles["not-implemented__img"]}
            />
          </div>
        </div>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default NotImplemented;
