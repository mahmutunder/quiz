import { Routes, Route } from "react-router-dom";
import HomePage from "./HomaPage"
import SubjectPage from "./SubjectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/subject/:subject" element={<SubjectPage />} />
      <Route path="/subject/:subject/:subElement" element={<SubjectPage />} />
    </Routes>
  );
}

export default App;
