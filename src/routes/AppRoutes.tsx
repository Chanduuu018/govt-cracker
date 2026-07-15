import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import NoteViewer from "../pages/exams/ssc/NoteViewer";
import SSCDashboard from "../pages/exams/ssc/Dashboard";
import Notes from "../pages/exams/ssc/Notes";
import PreviousPapers from "../pages/exams/ssc/PreviousPapers";
import MockTests from "../pages/exams/ssc/MockTests";
import Practice from "../pages/exams/ssc/Practice";
import CurrentAffairs from "../pages/exams/ssc/CurrentAffairs";
import AITutor from "../pages/exams/ssc/AITutor";
import TestPage from "../pages/exams/ssc/TestPage";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* SSC */}
      <Route path="/ssc" element={<SSCDashboard />} />
      <Route path="/ssc/notes" element={<Notes />} />
      <Route path="/ssc/notes/:id" element={<NoteViewer />} />
      <Route
        path="/ssc/previous-papers"
        element={<PreviousPapers />}
      />
      <Route path="/ssc/mock-tests" element={<MockTests />} />
      <Route path="/ssc/practice" element={<Practice />} />
      <Route
        path="/ssc/current-affairs"
        element={<CurrentAffairs />}
      />
      <Route path="/ssc/test/1" element={<TestPage />} />
      <Route path="/ssc/ai-tutor" element={<AITutor />} />
    </Routes>
  );
};

export default AppRoutes;