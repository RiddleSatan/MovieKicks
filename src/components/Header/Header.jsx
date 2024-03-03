import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useFetch from "../Hooks/useInfoHook";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  const { data, loading, error } = useFetch(search.toString());

  useEffect(() => {
    if (search.trim() !== "") {
      useFetch(search);
    }
  }, [search]);
  const handlechange = (e) => {
    setSearch(e);
    console.log(search);
  };

  const res = data.filter((e) => {
    return e && e.Title && e.Title.toLowerCase().includes(search);
  });
  console.log(res);

  return (
    <>
      <div className="w-{90%} h-14 m-4 rounded-lg bg-gray-200 font-medium  flex justify-between items-center px-6">
        <h1 className="text-lg">Just_Ur_Movies</h1>
        <div className="flex gap-6 text-lg">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/services"}>Services</NavLink>
          <NavLink to={"/about"}>About Us</NavLink>
          <NavLink to={"/contact"}>Dont Contact Us</NavLink>
        </div>
        <div>
          <input
            className="bg-yellow-200 h-6 rounded-md my-auto mr-2 "
            placeholder="Search Your Movies"
            type="search"
            value={search}
            onChange={(e) => handlechange(e.target.value)}
          />
          <button className="bg-orange-300 w-16 font-semibold rounded-lg ">
            Search
          </button>
        </div>
      </div>
      <div className=" w-40 absolute  right-[142px] mt-2 top-14">
        {data.length > 0 && (
          <ul className="bg-[#bef0ff] w-fit p-1 rounded-md ">
            {data.slice(0, 3).map((item, index) => (
              <li className="bg-white px-3 rounded w-[220px] my-1" key={index}>
                {item.Title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;