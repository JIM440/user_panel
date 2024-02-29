import { Link } from 'react-router-dom';
import logo from '../assets/icons/apple_logo.svg';
import language from '../assets/icons/Globe.svg';
import chat from '../assets/icons/Chat Bubble.svg';
import profile from '../assets/icons/People.svg';

const Navbar = () => {
  return (
    <nav className="admin-nav">
      <Link tp="/" className="logo">
        <img src={logo} alt="" />
        <span>iSTORE</span>
      </Link>
      <div className="nav-user-icons">
        <button className="theme">
          <img src="" alt="sun" />
        </button>
        <button className="language">
          <span>EN</span>
          <img src={language} alt="" />
        </button>
        <button className="chat">
          <img src={chat} alt="" />
        </button>
        <button className="profile-icon">
          <img src={profile} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
