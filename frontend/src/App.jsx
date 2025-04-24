import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';
import ClassPage from './pages/ClassPage';
import DevicePage from './pages/DevicePage';
import AttendancePage from './pages/AttendencePage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <Sidebar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<StudentPage />} />
              <Route path="/students" element={<StudentPage />} />
              <Route path="/teachers" element={<TeacherPage />} />
              <Route path="/classes" element={<ClassPage />} />
              <Route path="/devices" element={<DevicePage />} />
              <Route path="/attendance" element={<AttendancePage />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
