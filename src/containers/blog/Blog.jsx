import React from "react";
import styles from "./Blog.module.scss";
import { Article } from "../../components";

import img1 from "../../assets/Rectangle22.webp";
import img2 from "../../assets/Rectangle22-1.webp";
import img3 from "../../assets/Rectangle22-2.webp";
import img4 from "../../assets/Rectangle22-3.webp";
import img5 from "../../assets/Rectangle22-4.webp";

const Blog = (props) => {
  const articles = [
    {
      img: img1,
      title: "GPT-3 and Open AI is the future. Let us explore how it is?",
      data: "Sep 26, 2021",
      link: "",
    },
    {
      img: img2,
      title: "GPT-3 and Open AI is the future. Let us explore how it is?",
      data: "Sep 26, 2021",
      link: "",
    },
    {
      img: img3,
      title: "GPT-3 and Open AI is the future. Let us explore how it is?",
      data: "Sep 26, 2021",
      link: "",
    },
    {
      img: img4,
      title: "GPT-3 and Open AI is the future. Let us explore how it is?",
      data: "Sep 26, 2021",
      link: "",
    },
    {
      img: img5,
      title: "GPT-3 and Open AI is the future. Let us explore how it is?",
      data: "Sep 26, 2021",
      link: "",
    },
  ];

  return (
    <section className={`container ${styles["gpt3__blog"]}`}>
      <h2 className={`gradient__text ${styles["gpt3__blog-headline"]}`}>
        A lot is happening,
      </h2>
      <h2 className={`gradient__text ${styles["gpt3__blog-headline"]}`}>
        We are blogging about it.
      </h2>
      <div className={styles["gpt3__blog-articles"]}>
        {articles.map((article, idx) => (
          <Article
            key={`article-${idx}`}
            className={styles["gpt3__blog-articles_item"]}
            img={article.img}
            title={article.title}
            date={article.data}
            link={article.link}
            showOverlay={props.showOverlay}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
