import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAuth } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

const FetchData = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  const [err, setErr] = useState("");
  // const auth = useAuth();
  // const location = useLocation();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
        setErr("Not available");
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  return (
    <div>
      Type a number and Data will be fetched by Api end point
      <div>
        <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={() => handleClick()}>Fetch Data</button>
      </div>
      <h1>{post.title}</h1>
      <h1>{setErr}</h1>
    </div>
  );
};

export default FetchData;
