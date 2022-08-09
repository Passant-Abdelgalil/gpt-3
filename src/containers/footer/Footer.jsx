import styles from "./Footer.module.scss";

import logo from "../../assets/logo.svg";

const Footer = (props) => {
  const requestEarlyHandler = (e) => {
    e.preventDefault();
    props.showOverlay();
  };

  const handleClick =(e)=>{
    e.preventDefault();
    props.showOverlay();
  }
  return (
    <footer className={styles["gpt3__footer-wrapper"]}>
      <div className={`container ${styles["gpt3__footer"]}`}>
        <h1 className={`gradient__text ${styles["gpt3__footer-headline"]}`}>
          Do you want to step in to the future before others
        </h1>
        <button
          className={styles["gpt3__footer--request"]}
          onClick={requestEarlyHandler}
        >
          Request Early Access
        </button>
        <section className={`container ${styles["gpt3__footer-content"]}`}>
          <div className={styles["gpt3__footer-content_company"]}>
            <img
              className={styles["gpt3__footer-content_company-logo"]}
              src={logo}
              alt="logo"
            />
            <p className={styles["gpt3__footer-content_company-desc"]}>
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </p>
          </div>
          <div className={styles["gpt3__footer-content_nav-col"]}>
            <p className={styles["gpt3__footer-content_nav-col_title"]}>
              Links
            </p>
            <ul className={styles["gpt3__footer-content_nav-col_links"]}>
              <li>
                <a onClick={handleClick} href="/">Overons</a>
              </li>
              <li>
                <a onClick={handleClick} href="/">Social Media</a>
              </li>
              <li>
                <a onClick={handleClick} href="/">Counters</a>
              </li>
              <li>
                <a onClick={handleClick} href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles["gpt3__footer-content_nav-col"]}>
            <p className={styles["gpt3__footer-content_nav-col_title"]}>
              Company
            </p>
            <ul className={styles["gpt3__footer-content_nav-col_links"]}>
              <li>
                <a onClick={handleClick} href="/">Terms & Conditions</a>
              </li>
              <li>
                <a onClick={handleClick} href="/">Privacy Policy</a>
              </li>
              <li>
                <a onClick={handleClick} href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles["gpt3__footer-content_nav-col"]}>
            <p className={styles["gpt3__footer-content_nav-col_title"]}>
              Get in touch
            </p>
            <ul className={styles["gpt3__footer-content_nav-col_links"]}>
              <li>
                <p>Crechterwoord K12 182 DK Alknjkcb</p>
              </li>
              <li>
                <p>085-132567</p>
              </li>
              <li>
                <p>info@payme.net</p>
              </li>
            </ul>
          </div>
        </section>
        <p className={styles["gpt3__footer-rights"]}>
          © 2021 GPT-3. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
