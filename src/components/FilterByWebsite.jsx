/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState, useRef } from 'react';
import { getAll } from '../API/api';


export const Filter = () => {
	const [data, setdata] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [isChecked, setIsChecked] = useState(false);
	// const [isChecked1, setIsChecked1] = useState(false);
	// const [isChecked2, setIsChecked2] = useState(false);
	const inputRef = useRef(null);

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

	console.log(data);
	
	const isDataAvailable = Array.isArray(data) || Array.isArray(data?.backups);
	// const Filter = () => {
	// 	const filterValue = inputRef.current.value;
	// 	const filtered = data.filter((item) => item.name.includes(filterValue));
	// 	setFilteredData(filtered);
	// 	console.log(filteredData);

	// };
	const Filter = () => {
		
		console.log(filteredData);

	};
	
	const handleCheckboxChange = (event) => {
		setIsChecked(event.target.checked);
		if(!isChecked){
			console.log('enter1');
			const filtered = data.filter((item) => item.siteId===1);
			setFilteredData(...filtered);

		
		}
	};

	// const handleCheckboxChange1 = (event) => {
	// 	setIsChecked1(event.target.checked);
	// 	if(isChecked1){
	// 		const filtered = data.filter((item) => item.id.includes('ton'));
	// 		setFilteredData(...filtered);
	// 		console.log('isChecked1'+ isChecked1);
	// 	}
		
	// };
	// const handleCheckboxChange2 = (event) => {
	// 	setIsChecked2(event.target.checked);
	// 	if(!isChecked2){
	// 		console.log('enter2');
	// 		const filtered = data.filter((item) => item.email==='Zappos@gmail.com');
	// 		setFilteredData(...filtered);
			
	// 	}
	// };
	return<>
		<div>
			<button 
				onClick={Filter}><input type="text"placeholder='name website' ref={inputRef} />
			</button>
			<label>
				<input type="checkbox"
					checked={isChecked}
					onChange={handleCheckboxChange}/>
				{/* <input type="checkbox"
					checked={isChecked1}
					onChange={handleCheckboxChange1}/>  */}
				{/* <input type="checkbox"
					checked={isChecked2}
					onChange={handleCheckboxChange2}/>  */}

			</label>	
		</div>
		<h1>The Users 😂😃😄</h1>
		{isDataAvailable ? (
			data.backups?.map((item) => (
				<>
					<div>{item.siteId}</div>
					<div>{item.description}</div>
					<div>{item._id}</div>
					<div>{item._v}</div>
				</>
			))
		) : (
			<h1>No data available</h1>
		)}
	</>; };
