import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Login from "./pages/Login";
import PostJob from "./pages/PostJob"
import Navbar from "./components/Navbar";

function App() {
  return (
  <>
    
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postJob" element={<PostJob />} />
      </Routes>
    </BrowserRouter>
  
  </>
  
  );
}

export default App;