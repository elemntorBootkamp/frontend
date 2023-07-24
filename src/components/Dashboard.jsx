import { useEffect } from 'react';
import { getAllWebsites } from '../API/api';
import { useDispatch, useSelector } from 'react-redux';
import { set_website } from '../redux/dataActions';
import { Card } from '../components/card';
import './card.css';
import React from 'react';
export const Dashboard = () => {

	const websiteData = useSelector((state) => state.websiteData);
	const dispatch = useDispatch();

	useEffect(() => {
		async function fetchData() {
			const response = await getAllWebsites();
			dispatch(set_website(response));
		}
		fetchData();
	}, []);

	return <>
		{
			websiteData && (
				websiteData.map((website) =>
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