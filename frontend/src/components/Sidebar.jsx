import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Tạo file CSS này nếu chưa có

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <li><NavLink to="/students" activeclassname="active">Quản lý Sinh viên</NavLink></li>
        <li><NavLink to="/teachers" activeclassname="active">Quản lý Giảng viên</NavLink></li>
        <li><NavLink to="/classes" activeclassname="active">Quản lý Lớp học</NavLink></li>
        <li><NavLink to="/devices" activeclassname="active">Quản lý Thiết bị</NavLink></li>
        <li><NavLink to="/attendance" activeclassname="active">Lập lịch điểm danh</NavLink></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
