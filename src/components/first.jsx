import { useEffect, useState } from "react"
import { getAll } from "../API/api"

// export const User=()=>{
   
//   const [data,setdata]=useState({name:"undefind"})
  
    
//     useEffect(() => {
//         async function fetchData() {
//      const response = await getAll();
//        setdata(...response)

//           console.log(data)
//         }
//         fetchData();
//       }, []);
//        return<>
//     <h1>hello girl!</h1>
//     <h1>{data.id} 😋🤩</h1>
//     <h1>{data.name} 🤩</h1>
//     </>
// }
export const User1=()=>{
   
  const [data,setdata]=useState({name:"undefind"})
  
    
    useEffect(() => {
        async function fetchData() {
     const response = await getAll();
         

          setdata(...response)

          console.log(data1)
        }
        fetchData();
      }, []);
       return<>
    <h1>hello girl!</h1>
    <h1>{data.id} 😋🤩</h1>
    <h1>{data.id} 🤩</h1>
    </>
}

