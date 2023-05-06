import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>React Components</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to Home component */}
          <Link to="/">Home</Link>
        </li>
        {/* Endpoint to route for different components */}
        <li>
          <Link to="/Components/Books/Books">Books</Link>
        </li>
        <li>
          <Link to="/Components/ScrollGallery/ScrollGallery">
            Scroll Gallery
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
