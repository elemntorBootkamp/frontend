import { useEffect, useState } from 'react';
import { getAllWebsites } from '../api/api';
import { useDispatch } from 'react-redux';
import { set_all_website } from '../redux/dataActions';
import { Card } from './Card';

export const Dashboard = () => {

	const [allwebsites, setallwebsites] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		async function fetchData() {
			const response = await getAllWebsites();
			dispatch(set_all_website(response))
			setallwebsites(response);
		}
		fetchData();
	}, []);

	return <>
		{
			(allwebsites !== undefined && allwebsites.length > 0) && (
				allwebsites.map((website) =>
					<Card key={website._id} website={website}></Card>
				)
			)
		}
	</>;

};