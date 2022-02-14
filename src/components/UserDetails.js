import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  return <div>This includes the details of {userId}</div>;
};

export default UserDetails;
