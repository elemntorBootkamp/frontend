import { useEffect, useState } from 'react';
import { getAllWebsites } from '../API/api';
import { useDispatch } from 'react-redux';
import { set_all_website } from '../redux/dataActions';
import { Card } from '../components/card';
import './card.css';
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
					<div className='allCards' key={website._id}>
						<div className="cards" >
							<Card key={website.id} website={website}></Card>
						</div>
					</div>
				)
			)
		}
	</>;
};