
import axios from 'axios';


export const getAll = async () => {
	const port = import.meta.env.VITE_PORT || 8090;

	try {
		const response = await axios.get(`http://localhost:${port}/api/getAll`);
		return response.data;

	}
	catch (err) {
		return err;
	}
};
export const checkReact = async () => {
	try {
		const response = await axios.get('http://localhost:8090/protected');
		console.log('😛😛😛');
		console.log(response.data);
	}
	catch (err) {
		console.log(err);
	}
};



// axios.interceptors.request.use(
// 	(config) => {
// 		const token = keycloak.token;
// 		if (token) {
// 			config.headers.Authorization = `Bearer ${token}`;
// 		}
// 		return config;
// 	},
// 	(error) => {
// 		return Promise.reject(error);
// 	}
// );


