import React from "react";
import styles from "./Brand.module.scss";
/* Sponsers image => should be from API */
import google from "../../assets/google.png";
import shopify from "../../assets/shopify.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import slack from "../../assets/slack.png";

const Brand = () => {
  const sponsers = /* should be from API */ [
    { title: "google", img: google },
    { title: "slack", img: slack },
    { title: "atlassian", img: atlassian },
    { title: "dropbox", img: dropbox },
    { title: "shopify", img: shopify },
  ];
  return (
    <div className={styles["sponsers"]}>
      {sponsers.map((sponser) => (
        <img
          className={styles["sponsers_img"]}
          src={sponser.img}
          alt={sponser.title}
        />
      ))}
    </div>
  );
};

export default Brand;
