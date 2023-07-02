import { useEffect, useState } from 'react';
import React from 'react';
import { Card } from '../components/Card';
import getAll from '../API/getAllWebsites';

export const DisplayWebsites = () =>{

	const [data, setdata] = useState([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await getAll();
				setdata(response);
			}
			catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, []);

	return <>
		{
			(data !== undefined && data.length > 0) ? (
				data.map((website) => <>
					<Card title={website.name}
						description={website.description}
						img={website.websiteLogo}
						deatail1Title='Size: '
						deatail2Title='Manager: '
						deatail3Title='Date Published'
						deatail1={website.size}
						deatail2={website.manager}
						deatail3={website.datePublished}
					></Card>
				</>)
			) : (
				<>
				</>
			)
		}
	</>;

};
