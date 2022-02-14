import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home-heading'>
      This is Our Home Page
      <div>
        <button onClick={() => navigate("about")}>Go to About Section</button>
      </div>
    </div>
  );
};

export default Home;
