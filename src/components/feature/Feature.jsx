import styles from "./Feature.module.scss";

const Feature = (props) => {
  return (
    <div className={`${styles['feature']} ${props.className}`}>
      <h2 className={styles["feature__heading"]}>{props.title}</h2>
      <p className={styles["feature__paragraph"]}>{props.text}</p>
    </div>
  );
};

export default Feature;
