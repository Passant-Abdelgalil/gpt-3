import React from "react";
import styles from "./Possibility.module.scss";

import featureImage from "../../assets/Feature Image.png";

const Possibility = () => {
  return (
    <section className={styles["gpt3__possibility"]} id="possibility">
      <div className={styles["gpt3__possibility-image"]}>
        <img src={featureImage} alt="possibility" />
      </div>
      <div className={styles["gpt3__possibility-content"]}>
        <p className={styles["gpt3__possibility-content_requestEarly"]}>
          Request Early Access to Get Started
        </p>
        <h2
          className={`gradient__text ${
            styles["gpt3__possibility-content_headline"]
          }`}
        >
          The possibilities are beyond your imagination
        </h2>
        <p className={styles["gpt3__possibility-content_text"]}>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className={styles["gpt3__possibility-content_requestEarly"]}>
          Request Early Access to Get Started
        </p>
      </div>
    </section>
  );
};

export default Possibility;
