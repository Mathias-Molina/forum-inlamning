import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ marginBottom: "1rem" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>
        Start
      </Link>
      <Link to="/new">Skapa tråd</Link>
    </nav>
  );
}
export default Navbar;
