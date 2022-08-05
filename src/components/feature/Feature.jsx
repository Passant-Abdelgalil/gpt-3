import React from "react";
import styles from "./Feature.module.scss";

const Feature = (props) => {
  return (
    <div className={`${props.className} feature`}>
      <h2 className={styles["feature__heading"]}>{props.title}</h2>
      <p className={styles["feature__paragraph"]}>{props.text}</p>
    </div>
  );
};

export default Feature;
