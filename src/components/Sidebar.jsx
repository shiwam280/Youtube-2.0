import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";

const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if(!isMenuOpen)return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <h1 className="flex font-bold"><IoMdHome className="mr-4"/>Home</h1>
      <h1 className="flex font-bold"> <SiYoutubeshorts className="mr-4"/> Shorts</h1>
      <h1 className="flex font-bold"> <MdOutlineSubscriptions className="mr-4"/> Subscriptions</h1>
      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li>Your channel</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch later</li>
      </ul>
      <h1 className="font-bold pt-4">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default Sidebar;
