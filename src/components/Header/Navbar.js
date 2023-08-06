import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from 'react-icons/ai';

import NavbarLinks from './NavbarLinks';
import Logo from './Logo';
import './Header.css';

export default function NavBar({ onSelectCategory }) {
  return (
    <nav className="nav-bar">
      <Logo />

      <NavbarLinks
        onSelectCategory={onSelectCategory}
        className="navigation-menu"
      />

      <div className="nav-icons-container">
        <AiOutlineUser className="nav-icon" />
        <AiOutlineHeart className="nav-icon" />
        <AiOutlineShoppingCart className="nav-icon" />
      </div>
    </nav>
  );
}
