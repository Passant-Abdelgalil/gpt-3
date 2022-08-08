import React from "react";
import styles from "./Header.module.scss";

import headerImageWebp from "../../assets/Header-Illustration.webp";
import defaultProfile from "../../assets/profile.webp";

const Header = (props) => {
  const submitFormHandler = (e) => {
    e.preventDefault();
    props.showOverlay();
  };

  const requestingPeople = /* should be from API*/ [
    defaultProfile,
    defaultProfile,
    defaultProfile,
    defaultProfile,
    defaultProfile,
    defaultProfile,
    defaultProfile,
    defaultProfile,
    defaultProfile,
    defaultProfile,
  ];
  const requestsNumber = /* should be requestingPeople.length*/ 1600;

  return (
    <section id="home" className={`container ${styles["header"]}`}>
      <div className={styles["header__content"]}>
        <h1 className={`gradient__text ${styles["header__content-headline"]}`}>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className={styles["header__content-paragraph"]}>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <form
          className={styles["header__content-getStarted"]}
          onSubmit={submitFormHandler}
        >
          <input type="email" placeholder="Your Email Address" />
          <button type="submit">Get Started</button>
        </form>
        <div className={styles["header__content-requests"]}>
          <div className={styles["header__content-requests_images"]}>
            {requestingPeople.slice(0, 6).map((item, idx) => (
              <img key={`people-${idx + 1}`} src={item} alt="profile" />
            ))}
            <div className={styles["header__content-requests_images-more"]}>
              <p>1.6k+</p>
            </div>
          </div>
          <p className={styles["header__content-requests_paragraph"]}>
            {requestsNumber.toLocaleString()} people requested access a visit in
            last 24 hours
          </p>
        </div>
      </div>
      <div className={styles["header__image"]}>
        <img src={headerImageWebp} alt="header illustration" />
      </div>
    </section>
  );
};

export default Header;
