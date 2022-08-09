import styles from "./Article.module.scss";
const Article = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.showOverlay();
  };
  return (
    <div className={`${props.className} ${styles["article"]}`}>
      <div className={styles["article__image"]}>
        <img src={props.img} alt="article" />
      </div>
      <div className={styles["article__content"]}>
        <p className={styles["article__content_date"]}>{props.date}</p>
        <h3 className={styles["article__content_title"]}>{props.title}</h3>
        <a
          onClick={handleClick}
          href={props.link}
          className={styles["article__content--more"]}
        >
          Read Full Article
        </a>
      </div>
    </div>
  );
};

export default Article;
