const User=()=>{
    <h1>hello girl!</h1>
import { useEffect, useState } from "react"
import { getAll } from "../API/api"

export const User=()=>{
    const [data,setdata]=useState([])

    useEffect(() => {
        async function fetchData() {
     const response = await getAll();
         //console.log(response);

          setdata(...response)

          console.log(data)
        }
        fetchData();
      }, []);
       return<>
    <h1>hello girl!</h1>
    <h1>{data.email} 🤩</h1>
    </>
          
 
  
}