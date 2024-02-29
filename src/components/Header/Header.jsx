import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useFetch from "../Hooks/useInfoHook";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  const { data, loading, error } = useFetch(`${search}`);

  let [arraydata, setArraydata] = useState([]);

  useEffect(() => {
    if (data) {
      setArraydata(data);
      // console.log(data)
    } else {
      console.log("There was an error while loading the data");
    }
  }, [data, loading]);

  useEffect(() => {
    console.log(arraydata)
  }, [arraydata]);

  const handlechange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    setSearch(search);
    // console.log(search)
    setArraydata(data);
    // console.log(arraydata)
  };

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
            className="bg-yellow-200 h-6 rounded-md my-auto mr-2"
            placeholder="Search Your Movies"
            type="search"
            value={search}
            onChange={handlechange}
          />
          <button
            className="bg-orange-300 w-16 font-semibold rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
          {arraydata.length > 0 && (
            <ul>
              {arraydata.slice(0, 3).map((index, item) => (
                <li key={index}>{item.Title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
