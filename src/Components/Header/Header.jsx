import { NavLink } from 'react-router-dom';
import SpaceHubLogo from '../../Assets/space-hub-logo.png';
import './header.scss';

const Header = () => {
  const activeStyle = {
    textDecorationLine: 'underline',
  };

  return (
    <header className="header">
      <nav>
        <h1>
          <img src={SpaceHubLogo} width="50" alt="Space travels' hub logo" />
          <NavLink to="/">Space Travels&apos; Hub</NavLink>
        </h1>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="missions"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="profile"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
