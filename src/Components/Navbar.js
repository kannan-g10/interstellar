import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="m-9 text-xl flex justify-center text-yellow-400 capitalize ">
      <Link to="/" className="border-2 px-10 py-2">
        Take me to Home
      </Link>
    </div>
  );
};

export default NavBar;
