import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Login from "./pages/Login";
import PostJob from "./pages/PostJob"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/job" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postJob" element={<PostJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;