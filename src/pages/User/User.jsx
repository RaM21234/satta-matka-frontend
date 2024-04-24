import React from "react";
import Entry from "./Entry";
import Navbar from "../../components/Navbar";

const User = () => {
  return (
    <>
      <Navbar />
      <div class=" md:px-10 px-2">
        <Entry />
      </div>
    </>
  );
};

export default User;
