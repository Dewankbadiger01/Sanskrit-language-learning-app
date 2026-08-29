import { Link } from "react-router-dom";
import { Volume2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <div className="logo-icon">
          <Volume2 size={20} />
        </div>

        <span>SvaraVarga</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/sound-chart">Sound Chart</Link>
        <Link to="/pronunciation">Pronunciation</Link>
        <Link to="/practice">Practice</Link>
        <Link to="/progress">Progress</Link>
      </div>

    </nav>
  );
};

export default Navbar;