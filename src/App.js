import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const cors = require("cors");
app.use(cors());

import ShowArticle from "./components/ShowArticle";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Article from "./components/Article";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Article />
      <Route path="/article/:article_id" element={<ShowArticle />}></Route>
    </div>
  );
}

export default App;
