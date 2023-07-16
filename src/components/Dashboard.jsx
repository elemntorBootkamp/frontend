import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { get_website } from '../Redux/dataActions.jsx';
import { Card } from '../components/card';
import { SearchWebsites } from './SearchWebsites.jsx';
import './card.css';

export const Dashboard = () => {

	const userId = useSelector((state) => state.userId);
	const websiteData = useSelector((state) => state.websiteData);
	const dispatch_get_website = useDispatch();

	useEffect(() => {
		async function fetchData(){
			try{
				await dispatch_get_website(get_website(userId));
			}
			catch(error){
				return error;
			}
		}
		fetchData();
	}, [dispatch_get_website, userId]);

	useEffect(() => {
	}, [websiteData]);

	return <>
		<SearchWebsites></SearchWebsites>
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