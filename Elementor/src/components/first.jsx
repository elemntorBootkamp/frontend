import { useEffect, useState } from "react"
import { getById } from "../API/api"

export const User=()=>{
    const [data,setdata]=useState({name:"undefind"})

    // getById קריאת שרת לפונקציה 
    useEffect(() => {
        async function fetchData() {
          //פה צריכה להיות קריאת השרת במבנה הבא:
          //const response = await getById("shifra");
          console.log(response);
          setdata(response)
        }
        fetchData();
      }, []);
          
    return<>
    <h1>hello girl!</h1>
    <h1>{data.name}</h1>
    </>
}