import { Link } from "react-router-dom";

const Header = ({ component }) => {
  return (
    <header className="flex h-20 items-center justify-between">
      <Link to="/">
        <img className="h-8" src="/kitkat.png" alt="kitkat logo" />
      </Link>
      {component}
      <span className="font-medium text-[#646464]">v1.0</span>
    </header>
  );
};

export default Header;
