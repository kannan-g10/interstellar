import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center  ease-out hover:ease-in">
      <Link
        to="/nasaphoto"
        className="p-7 font-mono text-white text-5xl transition-all duration-1000 rounded-3xl uppercase border-4 hover:text-6xl hover:rounded-none hover:transform"
      >
        See into the stars!
      </Link>
    </div>
  );
};

export default Home;
