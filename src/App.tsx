import { BrowserRouter, Routes, Route } from "react-router-dom";
import Functionalities from "./pages/Functionalities";
import Home from "./pages/Home";
import Functions from "./pages/Functions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="functionalities" element={<Functionalities />} />
        <Route path="functions" element={<Functions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
