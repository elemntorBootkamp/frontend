/* eslint-disable indent */
/* eslint-disable no-const-assign */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useSelector } from 'react-redux';
// export const AxiosInstance = axios.create();

// let ACCESS_TOKEN = null;
// export function configureAxios (params) {
// 	debugger;
// 	ACCESS_TOKEN = params.accessToken;
//     AxiosInstance.interceptor.request.use( 
// 	config => {
// 		return config;
// 	},
// 	error => {
// 		return Promise.reject(error);
// 	});
// 	AxiosInstance.interceptor.response.use( response => {
		
// 	}, error => {
// 		return Promise.reject(error);
// 	});
// }
// axios.interceptors.request.use(
// 	(config) => {
// 		debugger;

// 		const token = getToken();
// 		console.log(token);
// 		if (token) {
// 			config.headers.Authorization = `Bearer ${token}`;
// 		}
// 		return config;
// 	},
// 	(error) => {
// 		console.log('error');
// 		return Promise.reject(error);
// 	}
// );

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


