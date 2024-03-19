import "./App.css";
import Navbar from "./components/Navbar.jsx";
import CourseContent from "./pages/CourseContent.jsx";
import InternshipReqForm from "./pages/InternshipReqForm.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./pages/Login";



function App() {
  return (
   <div>
    <Navbar />

<BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseContent />} />
        <Route path="/internshipreq" element={<InternshipReqForm />} />
      </Routes>
    </BrowserRouter>

    {/* <Login /> */}
    
   
   </div>
   
  );
}

export default App;
