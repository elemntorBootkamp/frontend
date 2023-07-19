/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { getAllWebsites } from '../API/api';
import { useDispatch,useSelector } from 'react-redux';
import { set_all_website } from '../Redux/dataActions';
import { Card } from '../components/card';
import {Filter} from './FilterByWebsite';
import './card.css';
export const Dashboard = () => {

	const dispatch = useDispatch();
	const allwebsites = useSelector(state => state.data);

	useEffect(() => {
		async function fetchData() {
			const response = await getAllWebsites();
			dispatch(set_all_website(response));
			
		}
		fetchData();
	}, []);

	return <>

		<Filter></Filter>
		{
			(allwebsites && (
				allwebsites.map((website) =>
				// eslint-disable-next-line react/react-in-jsx-scope
					<div className='allCards' key={website._id}>
						<div className="cards" >
							<Card key={website.id} website={website}></Card>
						</div>
					</div>)
			)
			)
		}
	</>;
};