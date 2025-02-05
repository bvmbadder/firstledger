import { BrowserRouter, Routes, Route } from "react-router-dom";
import Functionalities from "./pages/Functionalities";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="functionalities" element={<Functionalities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
