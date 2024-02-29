import { Link } from 'react-router-dom';
import logo from '../assets/icons/apple_logo.svg';
import language from '../assets/icons/Globe.svg';
import sun from '../assets/icons/sun.png';
import moon from '../assets/icons/moon.png';
import chat from '../assets/icons/Chat Bubble.svg';
import profile from '../assets/icons/People.svg';

const Navbar = ({ displaySidebar, toggleDisplay }) => {
  return (
    <nav className="admin-nav">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
        <span>iSTORE</span>
      </Link>
      <div className="nav-user-icons">
        <button className="theme">
          <img src={sun} alt="sun" />
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
        <button
          className={`menu-button ${displaySidebar === true ? 'clicked' : ''}`}
          onClick={toggleDisplay}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
