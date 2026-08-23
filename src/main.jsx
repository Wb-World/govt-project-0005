import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LegacyPage from './pages/LegacyPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import UsersFeedbackPage from './pages/UsersFeedbackPage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/users-feedback" element={<UsersFeedbackPage />} />
      <Route path="/user-feedback" element={<Navigate to="/users-feedback" replace />} />
      <Route path="/:language/users-feedback" element={<UsersFeedbackPage />} />
      <Route path="/:language/:section" element={<LegacyPage />} />
      <Route path="/:language" element={<LegacyPage />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  </BrowserRouter>,
);