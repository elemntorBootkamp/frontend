import axios from 'axios';

export const getAll=async()=>{
	const port = import.meta.env.VITE_PORT || 8090;
   
	try
	{
		const response=await axios.get(`http://localhost:${port}/api/getAll`);
		return response.data;
        
	}
	catch(err)
	{
		return err;
	}
};

export const updateWebsite=async()=>{
   alert(import.meta.env.PORT+'/api/Update')
    //  await axios.get(import.meta.env.PORT+'/api/Update')
    //   .then((res)=>{
    //   return res.data
    //   })
    //   .catch((err)=>{
    //    return err
    //   })    
}

