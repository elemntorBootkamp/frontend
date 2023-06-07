import axios from "axios"

export const getAll=async()=>{
    const port = import.meta.env.VITE_PORT || 8090
    try
    {
        const response=await axios.get(`http://localhost:${port}/api/getAll`)
        return response.data
        
    }
    catch(err)
    {
        return err;
    }
}

