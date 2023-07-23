import React, { useContext } from "react";

import { usercontext } from "../context/TaskListContext";
const Home = () => {
  const user = useContext(usercontext);
  return (
    <div>
      <h1>home</h1>
      <p>{user.name}</p>
      <button onClick={user.call}>level1</button>
    </div>
  );
};

export default Home;
