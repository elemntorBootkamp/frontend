/* eslint-disable no-unused-vars */
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
export const sendToken = async (token) => {
	const port = import.meta.env.VITE_PORT || 8090;
	try {
		const response = await axios.post(`http://localhost:${port}/api/token/`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		console.log(response.data);
		console.log('success!!');
	} catch (error) {
		console.error(error);
		console.log('error!!');
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


