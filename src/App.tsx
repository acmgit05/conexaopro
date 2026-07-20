import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/login';
import Feed from './Pages/feed';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
