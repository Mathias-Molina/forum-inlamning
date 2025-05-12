import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Thread from "./pages/thread";
import NewThread from "./pages/NewThread";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/threads/:id" element={<Thread />} />
          <Route path="/new" element={<NewThread />} />
          <Route path="*" element={<p>Sidan kunde inte hittas (404)</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
