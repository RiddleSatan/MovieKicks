// // import axios from "axios";
// // import { useState, useEffect } from "react";

// // const useInfo = function (query=spiderman) {
// //   const [info, setInfo] = useState([]);

// //   const rapidHeaders= {
// //     "X-RapidAPI-Key": "1026cea75bmsh3d6c23b626ef8f8p1ca301jsnd209f88f37f8",
// //     "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
// //   }
// //   const config={
// //     method: "GET",
// //     url: `https://imdb8.p.rapidapi.com/auto-complete?p=${query}`,
// //     headers:rapidHeaders
// //   };

// //   const fetchData=async ()=>{
// //     await axios.request(config)
// //     .then((res)=>setInfo(res.data))
// //     .catch((err)=>{
// //      console.log("Err!.There was an error in fetching the data from the APi ",err)
// //     })
// //   }
// //   useEffect(() => {
// //    fetchData()
// //   }, []);

// //   console.log(info)
// // };

// // export default useInfo;

// import axios from "axios";
// import { useState, useEffect } from "react";

// const useInfo = function (query) {
//   const [info, setInfo] = useState([]);

//   const rapidHeaders = {
//     "X-RapidAPI-Key": "1026cea75bmsh3d6c23b626ef8f8p1ca301jsnd209f88f37f8",
//     "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
//   };

//   const config = {
//     method: "GET",
//     url: `https://imdb8.p.rapidapi.com/auto-complete?p=${query}`,
//     headers: rapidHeaders,
//   };

//   const fetchData = async () => {
//     try {
//       const { status, data } = await axios(config);
//       console.log(data.d); 
//       if (status === 200) {
//         setInfo(data.d);
//       }
//     } catch (err) {
//       console.log(
//         "Error! There was an error in fetching the d from the API ",
//         err
//       );
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return info;
// };

// export default useInfo;




import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(query) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const rapidApiHeaders = {
    "X-RapidAPI-Key": "1026cea75bmsh3d6c23b626ef8f8p1ca301jsnd209f88f37f8",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  };

  const config = {
    method: "GET",
    url: `https://imdb8.p.rapidapi.com/auto-complete?q=${query}`,
    headers: rapidApiHeaders,
  };

  const fetchData = async () => {
    setError("");
    setLoading(true);
    try {
      const { status, data } = await axios.request(config);
      console.log(data.d)
      if (status === 200) setData(data.d);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, []);

  return { loading, data, error };
}

export default useFetch;
