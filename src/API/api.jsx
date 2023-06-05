import axios from "axios"



const port = import.meta.env.VITE_PORT || 8080

export const getAll=async()=>{
   
    try
    {
        const response=await axios.get(`http://localhost:8080/getAll`)
        return response.data
        
    }
    catch(err)
    {
        return err;
    }
}

