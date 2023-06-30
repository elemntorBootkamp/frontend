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
				data.map((w) => <>
					<Card title={w.name}
						description={w.description}
						img={w.websiteLogo}
						deatail1Title='Size: '
						deatail2Title='Manager: '
						deatail3Title='Date Published'
						deatail1={w.size}
						deatail2={w.manager}
						deatail3={w.datePublished}
					></Card>
				</>)
			) : (
				<>
				</>
			)
		}
	</>;

};