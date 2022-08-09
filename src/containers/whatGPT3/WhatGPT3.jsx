import styles from "./WhatGPT3.module.scss";

import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <section id="wgpt3" className={`container ${styles["wgpt3"]}`}>
      <div className={styles["wgpt3-wrapper"]}>
        <Feature
          className={`container ${styles["wgpt3__intro"]}`}
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by."
        />
        <div className={`container ${styles["wgpt3__features"]}`}>
          <div className={styles["wgpt3__features-header"]}>
            <h2
              className={`gradient__text ${styles["wgpt3__features-header-h"]}`}
            >
              The possibilities are beyond your imagination
            </h2>
            <a href="/" className={styles["wgpt3__features-header--explore"]}>
              Explore The Library
            </a>
          </div>
          <div className={styles["wgpt3__features-content"]}>
            <Feature
              className={styles["wgpt3__features-content_item"]}
              title="Chatbots"
              text="We so opinion friends me message as delight. Whole front do of
                plate heard oh ought."
            />
            <Feature
              className={styles["wgpt3__features-content_item"]}
              title="Knowledgebase"
              text="At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments"
            />
            <Feature
              className={styles["wgpt3__features-content_item"]}
              title="Education"
              text="At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatGPT3;
