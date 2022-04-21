import { getArticles } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Article = () => {
  const [articles, setArticles] = useState([]);
  const { article_id } = useParams();
  useEffect(() => {
    getArticles(article_id).then((articles) => {
      setArticles(articles);
    });
  }, []);
  return articles.map((article) => {
    return (
      <li key={article.article_id} className="article-list">
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <h3>{article.author}</h3>
      </li>
    );
  });
};

export default Article;