import axios from "axios"


export const getAll=async()=>{
    try
    {
        const response=await axios.get(`http://localhost:3000/getAll`)
        return response.data
    }
    catch(err)
    {
        return err;
    }
}

