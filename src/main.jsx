import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LegacyPage from './pages/LegacyPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import FeedbackPage from './pages/FeedbackPage.jsx';
import './styles/tailwind.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/:language/feedback" element={<FeedbackPage />} />
      <Route path="/:language/Feedback" element={<FeedbackPage />} />
      <Route path="/feedback" element={<Navigate to="/en/feedback" replace />} />
      <Route path="/Feedback" element={<Navigate to="/en/feedback" replace />} />
      <Route path="/users-feedback" element={<Navigate to="/en/feedback" replace />} />
      <Route path="/user-feedback" element={<Navigate to="/en/feedback" replace />} />
      <Route path="/:language/users-feedback" element={<Navigate to="/en/feedback" replace />} />
      <Route path="/:language/:section" element={<LegacyPage />} />
      <Route path="/:language" element={<LegacyPage />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  </BrowserRouter>,
);