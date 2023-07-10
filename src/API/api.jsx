import axios from 'axios';

export const getAll=async()=>{
	// const port = import.meta.env.VITE_PORT || 8090;  
	try
	{
		const response=await axios.get('http://localhost:8090/api/getAll');
		return response.data;       
	}
	catch(err)
	{
		return err;
	}
};

export const GetAllWebsite = async () => {
	// const port = import.meta.env.VITE_PORT || 8090;
	try {
		const response = await axios.get('http://localhost:8090/api/websites');
		return response.data.websites;
	}
	catch (err) {
		return err;
	}
};

// export const GetWebsiteByUserName = async () => {
// 	// const port = import.meta.env.VITE_PORT || 8090;
// 	try {
// 		const response = await axios.get('http://localhost:8090/api/websites');
// 		console.log(response.data);
// 		return response.data;
// 	}
// 	catch (err) {
// 		return err;
// 	}
// };

export const Search_Websites = async (userName, params) => {
	try {
		let i=0, string= '';
		if(typeof params === 'string')
		{
			string='searchAll='+params;
		}
		else
		{
			for(i=0; i < params.length-1; i++)
				string+= params[i].key+'='+params[i].value+'&';
			string+= params[i].key+'='+params[i].value;
		}
		//console.log(string);
		const response = await axios.get(`http://localhost:8090/api/search/${userName}?${string}`);
		// console.log(response.data);
		return response.data;
	}
	catch (err) {
		return err;
	}
};

// export const Search_Websites = async (params) => {
// 	try {
// 		const response = await axios.get(`http://localhost:8090/api/search/${userName}/${websiteName}`);
// 		console.log(response.data);
// 		return response.data;
// 	}
// 	catch (err) {
// 		return err;
// 	}
// };