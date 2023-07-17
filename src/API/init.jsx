/* eslint-disable react/react-in-jsx-scope */
import { configureAxios } from './api';
import { useSelector } from 'react-redux';
const Init = () => {
	const accessToken = useSelector(store => store.currentToken);
	configureAxios({accessToken});

	return (<><h1></h1></>
	);
};