import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header title="my blog" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
