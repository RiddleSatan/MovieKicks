import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import useFetch from "../Hooks/useInfoHook";
import { useState } from "react";
import axios from "axios";

const Header = () => {
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  async function fetchData(query) {
    setError('');

    setLoading(true);
    try {
      const { status, data } = await axios.request(
        `https://www.omdbapi.com/?s=${query}&page=1&apikey=507669ab`
      );
      console.log(data);
      console.log("a request was made");
      if (status === 200) setData(data.Search);
    } catch (error) {
      setError(error.message);
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (search) {
      fetchData(search);
      console.log(data);
    }
    else{
      setData([])
    }
  }, [search]);

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
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-orange-300 w-16 font-semibold rounded-lg ">
            Search
          </button>
        </div>
      </div>
      <div className=" w-40 absolute  right-[142px] mt-2 top-14">
        {data && data.length > 0 && (
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
