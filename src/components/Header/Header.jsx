import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  // Create a single instance of CancelTokenSource outside of functions, but within a `useRef` hook
  const cancelTokenSourceRef = React.useRef(axios.CancelToken.source());

  async function fetchData(query) {
    setError("");
    setLoading(true);

    try {
      const { status, data } = await axios.get(
        `https://www.omdbapi.com/?s=${query}&page=1&apikey=507669ab`,
        { cancelToken: cancelTokenSourceRef.current.token }
      );

      console.table(data);
      console.log("a request was made");

      if (status === 200) setData(data.Search);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request cancelled"); // Handle cancellation gracefully
      } else {
        setError(error.message);
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Create a new CancelTokenSource only when search changes
    const currentCancelTokenSource = axios.CancelToken.source();
    cancelTokenSourceRef.current = currentCancelTokenSource;

    // Cleanup function to cancel pending requests on unmount
    return () => {
      currentCancelTokenSource.cancel("canceling the request on unmount");
    };
  }, [search]); // Ensure cancellation and re-creation on search changes

  useEffect(() => {
    if (search) {
      fetchData(search);
    } else {
      setData([]);
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
