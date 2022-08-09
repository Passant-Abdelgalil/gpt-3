import styles from "./Brand.module.scss";

/* Sponsers image => should be from API */
import google from "../../assets/google.webp";
import shopify from "../../assets/shopify.webp";
import atlassian from "../../assets/atlassian.webp";
import dropbox from "../../assets/dropbox.webp";
import slack from "../../assets/slack.webp";

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
          key={sponser.title}
          className={styles["sponsers_img"]}
          src={sponser.img}
          alt={sponser.title}
        />
      ))}
    </div>
  );
};

export default Brand;
