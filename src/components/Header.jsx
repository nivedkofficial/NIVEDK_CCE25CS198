import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;