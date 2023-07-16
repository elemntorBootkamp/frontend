import axios from 'axios';

export const updateWebsite = async (website) => {
    const SERVERURL = import.meta.env.VITE_SERVER_URL;
    try {
        
        const { data } = await axios.put(`${SERVERURL}/website/`, website)
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

export const getValidCpu = async () => {
    const SERVERURL = import.meta.env.VITE_SERVER_URL;
    try{
        const { data} = await axios.get(`${SERVERURL}/cpu`)
    return data;
    } 
    catch(err){
        console.log(err);
    }
  };

export const getAllWebsites = async () => {
    const SERVERURL = import.meta.env.VITE_SERVER_URL;
    try{
        const {data} = await axios(`${SERVERURL}/website/`);
        return data;
    }
    catch(err){
        console.log(err);
    }
  };
  export const addWebsite = async (website) => {
    const SERVERURL = import.meta.env.VITE_SERVER_URL;
    try{
        debugger
        const {data} = await axios.post(`${SERVERURL}/website/`,website);
        console.log(data);
        return data;
    }
    catch(err){
        console.log(err);
    }
  };