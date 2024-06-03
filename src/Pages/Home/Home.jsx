import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* Add your content here */}
      <Link to={"/about"}>About Page</Link>
    </div>
  );
};

export default Home;
