import React from "react";
import { Feature } from "../../components";
import styles from "./Features.module.scss";
const Features = () => {
  return (
    <section className={styles["gpt3__features"]}>
      <div className={styles["gpt3__features-heading"]}>
        <h2 className={`gradient__text ${styles["gpt3__features-heading_h"]}`}>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <p className={styles["gpt3__features-heading_p"]}>
          Request Early Access to Get Started
        </p>
      </div>
      <div className={styles["gpt3__features-content"]}>
        <Feature
          className={styles["gpt3__features-content_item"]}
          title="Improving end distrusts instantly"
          text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
        />
        <Feature
          className={styles["gpt3__features-content_item"]}
          title="Become the tended active"
          text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
        />
        <Feature
          className={styles["gpt3__features-content_item"]}
          title="Message or am nothing"
          text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
        />
        <Feature
          className={styles["gpt3__features-content_item"]}
          title="Really boy law county"
          text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
        />
      </div>
    </section>
  );
};

export default Features;
