import { useEffect, useState } from "react"
import { getAll } from "../API/api"

export const User = () => {
  // const [data,setdata]=useState([])


  const [data, setdata] = useState({ name: "undefind" })

  // getById קריאת שרת לפונקציה 
  useEffect(() => {
    async function fetchData() {
      const response = await getAll();
      //console.log(response);

      setdata(...response)

      console.log(data)
    }
    fetchData();
  }, []);
  return <>
    <h1>hello girl!</h1>
    {
// data.map((ele,i)=>{
//   <>
//   <h1>{ele.email}</h1>
//   <h1>{ele.name}</h1>
// </>
// })
    }
    <h1>{data.email} 🤩</h1>
    <h1>{data.name} 🤩</h1>
  </>



}