import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (<>
  <h1>User Administration System</h1>
  <p>A practice project using React, Redux, React Router, and React Hooks.</p>
  <Link to="about">Learn more...</Link>
</>
);

export default HomePage;