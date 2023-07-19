import axios from 'axios';

export const updateWebsite = async (website) => {
	const SERVERURL = import.meta.env.VITE_SERVER_URL;
	try {
		const { data } = await axios.put(`${SERVERURL}/website/`, website);
		return data;
	}
	catch (err) {
		console.log(err);
	}
};

export const getValidCpu = async () => {
	const SERVERURL = import.meta.env.VITE_SERVER_URL;
	try{
		const { data} = await axios.get(`${SERVERURL}/cpu`);
		return data;
	} 
	catch(err){
		console.log(err);
	}
};

export const getAllWebsites = async () => {
	const SERVERURL = import.meta.env.VITE_SERVER_URL;
	try{
		const {data} = await axios(`${SERVERURL}/website/getAll`);
		console.log(data);
		return data;
	}
	catch(err){
		console.log(err);
	}
};



export const getAll=async()=>{
	
	try
	{
		const response=await axios.get('http://localhost:8090/website/getAll');
		console.log(response);
		return response.data;

	}
	catch(err)
	{
		return err;
	}
};

export const FilterWebsite = async (userId,params) => {
	const PORT = import.meta.env.VITE_REACT_APP_API_KEY;
	
	try {
		let queryString = '';
		for (let i = 0; i < params.length; i++) {
			queryString += `${params[i].key}=${params[i].value}&`;
		}
		queryString = queryString.slice(0, -1);
		console.log(queryString);

		//צריך ראוטר לניתוב הזה
		const response = await axios.get(`${PORT}/${userId}?${queryString}`);
		console.log(response.data);
		return response.data;
		
	} catch (error) {
		return { error: error.message };
	}
};
