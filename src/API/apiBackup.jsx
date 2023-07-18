import axios from "axios";
export const getAllBackups = async () => {
    const SERVERURL = import.meta.env.VITE_SERVER_URL;
    try{
        const {data} = await axios(`${SERVERURL}/backup/`);
        return data;
    }
    catch(err){
        console.log(err);
    }
  };
  export const addBackupApi = async (backup) => {
    const SERVERURL = import.meta.env.VITE_SERVER_URL;
    try{
        const {data} = await axios.post(`${SERVERURL}/backup/`,backup);
        return data;
    }
    catch(err){
        console.log(err);
    }
  };