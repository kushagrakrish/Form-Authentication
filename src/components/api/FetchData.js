import axios from "axios";
import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  const [err, setErr] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
        setErr(true);
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
      {err && <h2>Something went Wrong</h2>}
    </div>
  );
};

export default FetchData;
