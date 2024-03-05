import React, { useContext, useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import useInfo from "../Hooks/useInfoHook";
import useFetch from "../Hooks/useInfoHook";
import UserContext from "../../context/UserContext";
import axios from "axios";


const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { user } = useContext(UserContext);

  useEffect(() => {
    const getData = async (query) => {
      try {
        const { status, data } = await axios.get(
          `https://www.omdbapi.com/?s=${query}&page=1&apikey=507669ab`
        );
        console.log("A request was made!");
        console.table(data);
        if (status === 200) {
          setData(data.Search);
        }
      } catch (error) {
        console.log("Error...!", error);
        setError("Error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    getData(user || "batman"); // Use user or a default query here
  }, [user]); // Call getData whenever user changes

  // const getData = async (query) => {
  //   try {
  //     const { status, data } = await axios.get(
  //       `https://www.omdbapi.com/?s=${query}&page=1&apikey=507669ab`
  //     );
  //     console.log("A request was made!");
  //     console.table(data);
  //     if (status == 200) {
  //       setData(data.d);
  //     }
  //   } catch (error) {
  //     console.log("Error...!", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // getData("batman");

  // useEffect(()=>{
  // getData(user)
  // },[user])

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className="w-[90%] flex gap-20 flex-wrap mx-auto">
          {data.map((info, id) => (
            <div
              key={id}
              className="w-[18%]   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={info.Poster}
                  alt={info.Title}
                />
              </a>
              <div className="p-2 ">
                <h5 className="mb-2  text-md mx-auto font-bold tracking-tight text-gray-900 dark:text-white">
                  {info.Title}
                </h5>
                <h5 className="mb-2 text-md mx-auto font-bold tracking-tight text-gray-900 dark:text-white">
                  {info?.Type}
                </h5>
                <h5 className="mb-2 text-md mx-auto font-bold tracking-tight text-gray-900 dark:text-white">
                  {info?.Year}
                </h5>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Card;
