/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { FilterWebsite } from '../API/api';
import {filterAction} from '../Redux/dataActions';
import { useSelector } from 'react-redux';
import {useDispatch } from 'react-redux';




export const Filter = () => {
	const title = ['Docker','GitHub', 'Google'];
	const userId= useSelector(state => state.userId);
	const params=[];
	// const [isLoading, setIsLoading] = useState(true);
	const description = ['A visual discovery platform', 'A free online encyclopedia', 'A search engine'];
	
	const data1 = useSelector(state => state.data);
	const [data, setdata] = useState([]);
	
	let dispath = useDispatch();
	useEffect(() => {

		// fetchData();
	}, [data1]);	

	const fetchData = async() =>{
		
		try {
			
			
			const response = await FilterWebsite(userId,params);
			console.log(response);

			setdata(response);
			dispath(filterAction(response));
		
		}
		catch (error) { console.error(error);
		}
	};
	
	const DescriptionButtonClick = (key) => {
		console.log('תאור');
		// eslint-disable-next-line react/prop-types
		params.push({ key: 'description', value: key });
		console.log(params);
		
	};
	const TitleButtonClick1 = (key) => {
		console.log('כותרת');
		// eslint-disable-next-line react/prop-types
		params.push({ key: 'title', value: key });
		console.log(params);
		
	};
	
	
	return <>
		<h1>The Users 😂😃😄</h1><p>{import.meta.env.VITE_REACT_APP_API_KEY}</p>
		
		{title.map((key) => (
			
			<button key={key} onClick={() => TitleButtonClick1(key)}>
              Button {key}</button>
				
		))}
		
		{description.map((key) => (
			// eslint-disable-next-line react/jsx-key
			<div>
				<button key={key} onClick={() => DescriptionButtonClick(key)}>
                Button {key}</button>
			</div>
		))}
		<div>
			<button  onClick={ fetchData}>click
			</button>
		</div>
			
		
		{/* {data1 && 
			data1.map((item) => (
				<div key={item._id}>
					<img src={item.websiteLogo} />
					<div>{item.websiteLogo}</div>
					<div>{item.description}</div>
					<div>{item._id}</div>
				</div>
			))
		} */}
	</>;

};
// async function fetchData() {
// 	try {
// 		const response = await FilterWebsite(props);
// 		setdata(response);
// 		setIsLoading(false);
				
// 	}
// 	catch (error) {
// 		console.error(error);
// 	}
// }
