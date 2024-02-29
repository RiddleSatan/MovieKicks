import React from "react";
import { FaDownload } from "react-icons/fa";
import useInfo from "../Hooks/useInfoHook";
import useFetch from "../Hooks/useInfoHook";

const Card = () => {
  let { data, loading, error } = useFetch("batman");
  // console.log(data)
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
