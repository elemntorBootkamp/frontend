import axios from 'axios';

export const get_website = (userId) => {
	return async (dispatch) => {
		try {
			const SERVERURL = import.meta.env.VITE_SERVER_URL;
			const token =import.meta.env.VITE_TOKEN;
			const response = await axios.get(`${SERVERURL}/website/${userId}`, {headers: {'authorization': `Bearer ${token}`}});
			dispatch({ type: 'GET_WEBSITE', payload: response.data });
		} catch (error) {
			return error;
		}
	};
};

export const search_website = (userId, params) => {
	return async (dispatch) => {
		try {
			const SERVERURL = import.meta.env.VITE_SERVER_URL;
			const response = await axios.get(`${SERVERURL}/website/search/${userId}?${params}`);
			dispatch({ type: 'SEARCH_WEBSITE', payload: response.data });
		} catch (error) {
			console.error('Error:', error);
			return error;
		}
	};
};

export const filter_website = (userId, params) => {
	return async (dispatch) => {
		try {
			const SERVERURL = import.meta.env.VITE_SERVER_URL;
			const response = await axios.get(`${SERVERURL}/website/filter/${userId}?${params}`);
			dispatch({ type: 'FILTER_WEBSITE', payload: response.data });
		} catch (error) {
			console.error('Error:', error);
			return error;
		}
	};
};

export const sort_website = (userId, params) => {
	return async (dispatch) => {
		try {
			const SERVERURL = import.meta.env.VITE_SERVER_URL;
			const response = await axios.get(`${SERVERURL}/website/sort/${userId}?${params}`);
			dispatch({ type: 'SORT_WEBSITE', payload: response.data });
		} catch (error) {
			console.error('Error:', error);
			return error;
		}
	};
};

export const set_current_websie = (website) => {
	return { type: 'SET_CURRENT_WEBSITE', payload: website };
};

export const set_all_website = (websites) => {
	return { type: 'SET_ALL_WEBSITES', payload: websites };
};
