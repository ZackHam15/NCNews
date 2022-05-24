import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-zack.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return newsApi
    .get("/articles", {
      params: {
        topic,
      },
    })
    .then(({ data }) => {
      const articleArray = data.articles;
      return articleArray;
    });
};

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => data.topics);
};

export const singleArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const patchInc = (article_id) => {
  return newsApi
    .patch(`/articles/${article_id}`, {
      inc_votes: 1,
    })
    .then((data) => {
      return data.data.article.votes;
    });
};

export const patchDec = (article_id) => {
  return newsApi
    .patch(`/articles/${article_id}`, {
      inc_votes: -1,
    })
    .then((data) => {
      return data.data.article.votes;
    });
};
