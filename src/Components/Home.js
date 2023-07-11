import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center transition duration-150 ease-out hover:ease-in">
      <Link
        to="/nasaphoto"
        className="p-7 font-mono text-white text-5xl rounded-3xl uppercase border-4 hover:text-6xl hover:rounded-none"
      >
        See into the stars!
      </Link>
    </div>
  );
};

export default Home;
