import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import Docs from "./pages/Docs";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#030308] text-white">

        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Main Pages */}
          <Route path="/product" element={<Product />} />

          <Route path="/solutions" element={<Solutions />} />

          <Route path="/industries" element={<Industries />} />

          <Route path="/pricing" element={<Pricing />} />

          <Route path="/docs" element={<Docs />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;