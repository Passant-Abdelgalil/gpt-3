import React from "react";
import styles from "./CTA.module.scss";

const CTA = () => {
  const getStartedHandler = (e) => {};

  return (
    <section className={`container ${styles["gpt3__CTA"]}`}>
      
        <div className={styles["gpt3__CTA_text"]}>
          <p className={styles["gpt3__CTA_text-sm"]}>
            Request Early Access to Get Started
          </p>
          <h3 className={styles["gpt3__CTA_text-lg"]}>
            Register today & start exploring the endless possiblities.
          </h3>
        </div>
        <button
          className={styles["gpt3__CTA--btn"]}
          onClick={getStartedHandler}
        >
          Get Started
        </button>
    </section>
  );
};

export default CTA;
