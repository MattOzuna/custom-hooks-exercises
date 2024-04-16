import { useEffect, useState } from "react";

/**
 * @param {string} key 
 * @param {Any} defaultValue 
 * @returns {[state, setState]}
 * this will store values from associated state in localstorage
 */
const useLocalStorageState = (key, defaultValue='') => {
  const [value, setValue] = useState(() => {
    try{
      let val = JSON.parse(window.localStorage.getItem(key)) || defaultValue;
      return val;
    } catch (err){
      console.log(`issue with ${key}`, err)
    }
  });

  useEffect(() => {
    try{
      let val = JSON.stringify(value)
      window.localStorage.setItem(key, val)
    } catch (err){
      console.log(err)
    }
  }, [value]);

  return [value, setValue];
};

export default useLocalStorageState;
