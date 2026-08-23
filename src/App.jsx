import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const EnglishPage = lazy(() => import('./pages/EnglishPage.jsx'));
const TamilPage = lazy(() => import('./pages/TamilPage.jsx'));
const FeedbackPage = lazy(() => import('./pages/FeedbackPage.jsx'));
const UsersFeedbackPage = lazy(() => import('./pages/UsersFeedbackPage.jsx'));
const AdminLogin = lazy(() => import('./pages/AdminLogin.jsx'));

function LoadingScreen() {
  return (
    <div id="loading-screen" className="fixed inset-0 flex flex-col items-center justify-center bg-slate-50 z-50" style={{ position: 'fixed', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', zIndex: 50 }}>
      <img src="/assets/icons/TamilNadu_Logo.svg" alt="Logo" className="w-32 h-32 animate-pulse zoom-in-out-box" style={{ width: 96, height: 96, objectFit: 'contain' }} />
      <p className="mt-12 text-gray-950" style={{ marginTop: 24, color: '#111827' }}>Loading...</p>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/en" element={<EnglishPage />} />
        <Route path="/En" element={<Navigate to="/en" replace />} />
        <Route path="/En/index.html" element={<Navigate to="/en" replace />} />
        <Route path="/ta" element={<TamilPage />} />
        <Route path="/Ta" element={<Navigate to="/ta" replace />} />
        <Route path="/Ta/index.html" element={<Navigate to="/ta" replace />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/users-feedback" element={<UsersFeedbackPage />} />
        <Route path="/user-feedback" element={<Navigate to="/users-feedback" replace />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </Suspense>
  );
}
