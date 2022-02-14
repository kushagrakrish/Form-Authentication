import axios from "axios";
import React, { useState, useEffect } from "react";

const Jokes = () => {
  const [jokes, setJokes] = useState({});
  useEffect(() => {
    axios
      .get("https://api.fungenerators.com")
      .then((res) => {
        console.log(res.contents.fact);
        // setJokes(res.contents.fact);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return <div>Jokes</div>;
};

export default Jokes;
