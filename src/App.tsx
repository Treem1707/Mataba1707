import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "@pages/auth/Register";
import Login from "@pages/auth/Login";
import Home from "@pages/home/Home";
import About from "@pages/about/About";
import Programs from "@pages/programs/Programs";
import Enroll from "@pages/enroll/Enroll";
import Success from "@pages/success/Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
