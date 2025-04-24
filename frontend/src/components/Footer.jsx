import { FaUserCircle } from "react-icons/fa"
import './Header.css'

const Header = () => {
  const adminName = "Admin";

  return (
    <header>
      <h1>Hệ thống điểm danh sinh viên</h1>
      <div>
        <span>Xin chào, {adminName}</span>
        <FaUserCircle/>
      </div>
    </header>
  );
};

export default Header;
