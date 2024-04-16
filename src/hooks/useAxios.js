import axios from "axios";
import { useState } from "react";
import { v1 as uuid } from "uuid";
import useLocalStorageState from "./useLocalStorageState";

const useAxios = (key, defaultValue) => {
  const [Data, setData] = useLocalStorageState(key, defaultValue);
  const fetchData = async (url, params = "") => {
    try {
      const response =
        params !== ''
          ? await axios.get(`${url}/${params}`)
          : await axios.get(url);
      setData((Data) => [...Data, { ...response.data, id: uuid() }]);
    } catch (err) {
      console.log(`issue with fetch from ${url}/${params}`, err);
    }
  };

  return [Data, fetchData];
};

export default useAxios;
