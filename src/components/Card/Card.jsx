import React from "react";
import { FaDownload } from "react-icons/fa";
import useInfo from "../Hooks/useInfoHook";
import useFetch from "../Hooks/useInfoHook";

const Card = () => {
  const { data, loading, error } = useFetch("spiderman");
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
                  src={info.i.imageUrl}
                  alt={info.l}
                />
              </a>
              <div className="p-2 ">
                <h5 className="mb-2  text-md mx-auto font-bold tracking-tight text-gray-900 dark:text-white">
                  {info.l}
                </h5>
                <h5 className="mb-2 text-md mx-auto font-bold tracking-tight text-gray-900 dark:text-white">
                  {info?.s}
                </h5>
                <h5 className="mb-2 text-md mx-auto font-bold tracking-tight text-gray-900 dark:text-white">
                  {info?.q}
                </h5>
              </div>
            </div>
          ))}
        </div>
      )}
    </>

    // <>
    //   <div className="w-[12%]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <a href="#">
    //       <img className="rounded-t-lg" src="https://m.media-amazon.com/images/M/MV5BOWZmOGQyNDctYWFjMC00NWQxLTg1YWQtMzExZWQzNjgzZDBiXkEyXkFqcGdeQXVyMTk3OTQ4ODk@._V1_.jpg" alt="" />
    //     </a>
    //     <div className="p-2">
    //       <a href="#">
    //         <h5 className="mb-2 text-2xl mx-auto font-bold tracking-tight text-gray-900 dark:text-white">
    //           The Boy 2021
    //         </h5>
    //       </a>
    //       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
    //       <a
    //         href="#"
    //         className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Download
    //         <FaDownload className="mx-2" />
    //       </a>
    //     </div>
    //   </div>
    // </>
  );
};

// function Card() {
//   const { data, loading, error } = useFetch("spiderman");

//   console.table(data);

//   return (
//     <section>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <h1>{error}</h1>
//       ) : (
//         <div className="list">
//           {data.map((info, id) => (
//             <div className="card" key={id}>
//               {info.i && (
//                 <img src={info.i.imageUrl} alt={info.l} width={"80%"} />
//               )}
//               <h2>{info.l}</h2>
//               <p>{info?.s}</p>
//               <p>{info?.q}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

export default Card;
