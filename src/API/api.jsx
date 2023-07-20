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
	try {
		const { data } = await axios.get(`${SERVERURL}/cpu`);
		return data;
	}
	catch (err) {
		console.log(err);
	}
};

export const getAllWebsites = async () => {
	const SERVERURL = import.meta.env.VITE_SERVER_URL;
	try {
		const { data } = await axios(`${SERVERURL}/website/`);
		return data;
	}
	catch (err) {
		console.log(err);
	}
};


export const deleteWebsite = async (websiteid, userid) => {
	alert('delete website');
	alert(websiteid);
	alert(userid);

	const SERVERURL = import.meta.env.VITE_SERVER_URL;
	const userId = userid;
	// const userId = useSelector((state) => state.userId);
	const websiteId = websiteid;
	console.log('i\'m in delete function');

	try {
		const response = await axios.delete(`${SERVERURL}/website/${websiteId}/${userId}`, {});
		return response.data;

	}
	catch (error) {
		console.error(error);
	}
};

