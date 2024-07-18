import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Feed } from "./pages/Feed";
import { Test } from "./pages/";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/teste" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
