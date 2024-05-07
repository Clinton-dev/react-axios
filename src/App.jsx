import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import EditPost from "./EditPost";
import PostPage from "./PostPage";
import About from "./About";
import NewPost from "./NewPost";

function App() {
  return (
    <div>
      <Header title="my blog" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<NewPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PostPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
