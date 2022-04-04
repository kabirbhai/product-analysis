import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Review from "./components/Review/Review";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import DashBoard from "./components/DashBoard/DashBoard";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
