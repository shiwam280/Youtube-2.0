import React from "react";
import Button from "./Button";

const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "News", "Cooking", "Programming", "Podcast"];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((value, index) => <Button key={index} value={value}/>)}
    </div>
  );
};

export default ButtonList;
