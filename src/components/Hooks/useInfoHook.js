"usestrict"

import axios from "axios";
import { useState, useEffect } from "react";

const useInfo = function () {
  const [info, setInfo] = useState({});
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/auto-complete",
      params: { q: "game of thr" },
      headers: {
        "X-RapidAPI-Key": "1026cea75bmsh3d6c23b626ef8f8p1ca301jsnd209f88f37f8",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    })
      .then(res => setInfo(res)       )
      .catch((err) => {
        console.error("Error in fetching the data ", err);
      });
  }, []);

  return info.d.map((items) => {
    console.log(items.q);
  });
};

export default useInfo;


