import "./App.css";
import { SearchByComponent } from "./pages/SearchByComponent";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <nav className="mainNav">
        <div className="divLogoImage">
          <img
            class="logoImage"
            src="https://i.pinimg.com/550x/56/79/3f/56793f386053f9a0ae2f6eda1c5c29f1.jpg"
          ></img>
          <p className="mainName">Kitchen Genius</p>
        </div>

        <Link className="link" to="/">
          Search By Name
        </Link>
        <Link className="link" to="/search">
          Search By Component
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchByComponent />} />
      </Routes>
    </>
  );
};

export default App;
