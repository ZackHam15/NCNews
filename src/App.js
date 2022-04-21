import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Topics from "./components/Topics";
import { useState } from "react";

function App() {
  const [article, setArticles] = useState([]);
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Routes>
        <Route
          path="/articles"
          element={<Topics setArticles={setArticles} articles={article} />}
        />
        <Route
          path="/articles/:topic"
          element={<Topics setArticles={setArticles} articles={article} />}
        />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
