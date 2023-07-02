import axios from 'axios';

export const getAll = async () => {
	const port = import.meta.env.VITE_PORT || 8090;
	try {
		const response = await axios.get(`http://localhost:${port}/api/websites/`);
		console.log(response.data);
		return response.data;
	}

	catch (err) {
		return err;
	}
};

export default getAll;
