/* eslint-disable react/react-in-jsx-scope */
import {useParams } from 'react-router';

export const Login = () => {
  
	let params = useParams();
 
	return <>
		{
			params.component.localeCompare('login') == 0 &&<h1>login</h1>
      
		}
	</>;
};