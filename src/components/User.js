import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      User List
      <nav>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>
      </nav>
      <Outlet />
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active User
      </button>
      <button onClick={() => setSearchParams({})}>Reset Filter</button>
      {showActiveUsers ? (
        <h2>Showing all the active Users</h2>
      ) : (
        <h2>Showing all the users</h2>
      )}
    </div>
  );
};

export default User;
