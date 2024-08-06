import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { fname } = useParams();
  console.log(fname);
  return (
    <>
      <h1>My name is {fname}</h1>
    </>
  );
};

export default User;
