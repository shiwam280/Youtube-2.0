import React, { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const[suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else{
        getSearchSuggestions()
      }
      }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery] : json[1],
    }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-md">
      <div className="flex col-span-1">
        <RxHamburgerMenu
          className="size-6 mt-4 ml-4 cursor-pointer "
          onClick={() => toggleMenuHandler()}
        />
        <FaYoutube className="size-10 mt-2 pl-4" />
        <ImYoutube2 className="size-14" />
      </div>
      <div className="mt-1 col-span-10 text-center">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 border border-black rounded-l-full p-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          ></input>
          <button className="border border-black rounded-r-full px-5 py-3 bg-gray-100">
            <CiSearch />
          </button>
        </div>
        {showSuggestion && (<div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border-gray-100">
          <ul>
            {suggestions.map((s) => <li key={s} className="py-2 shadow-sm hover:bg-gray-100">{s}</li>)}
          </ul>
        </div>)}
      </div>
      <div className="col-span-1">
        <FaUserCircle className="size-8 mt-3" />
      </div>
    </div>
  );
};

export default Header;
