import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink href="#">Cats</NavLink></li>
        <li><NavLink href="#">Dogs</NavLink></li>
        <li><NavLink href="#">Computers</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
