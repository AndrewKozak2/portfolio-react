import { Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <ReactLenis root>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </ReactLenis>
  );
}

export default App;
