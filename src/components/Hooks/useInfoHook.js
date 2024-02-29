import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(query) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");


  const fetchData = async () => {
    setError("");
    setLoading(true);
    try {
      const { status, data } = await axios.request(`https://www.omdbapi.com/?s=${query}&page=1&apikey=507669ab`);
      // console.log(data.Search)
      console.log('a request was made')
      if (status === 200) setData(data.Search);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchData(query);
      // console.log(data)
    }
  }, []);

  return { loading, data, error };
}

export default useFetch;
