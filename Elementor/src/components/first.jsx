import { useEffect, useState } from "react"
import { getAll } from "../API/api"

export const User=()=>{
    const [data,setdata]=useState({name:"undefind"})

    useEffect(() => {
        async function fetchData() {
         
          console.log(response);
          setdata(response)
        }
        fetchData();
      }, []);
          
 
  
}