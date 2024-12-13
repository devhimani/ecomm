import { Home } from "lucide-react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
