import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { get_website, search_website } from '../Redux/dataActions.jsx';
import { Button } from './button';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import './SearchWebsites.css';

export const SearchWebsites = () => {

	const [searchAll, setSearchAll] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [domain, setDomain] = useState('');
	const [typeOfDomain, setTypeOfDomain] = useState('');
	const [cpu, setCpu] = useState('');
	const [memory, setMemory] = useState('');
	const [status, setStatus] = useState('');
	const [showFilter, setShowFilter] = useState(false);
	const userId = useSelector((state) => state.userId);
	const websiteData = useSelector((state) => state.websiteData);
	const dispatch_get_website = useDispatch();
	const dispatch_search_website = useDispatch();

	useEffect(() => {
	}, [websiteData]);

	const newSearch = () => {
		setTitle('');
		setDescription('');
		setDomain('');
		setTypeOfDomain('');
		setCpu('');
		setMemory('');
		setStatus('');
	};

	const onFilter = () => {
		setShowFilter(true);
	};

	const onCancel = () => {
		setShowFilter(false);
	};

	const onSearch = async (event) => {
		setShowFilter(false);
		if(searchAll)
		{
			try{
				await dispatch_search_website(search_website(userId, `searchAll=${searchAll}`));
				if(websiteData.length==0)
					alert('לא נמצאו אתרים לפי החיפוש');
			}
			catch(error){
				return error;
			}
		}
		else if(title || description || domain || typeOfDomain || cpu || memory || status)
		{
			event.preventDefault();
			try {
				let queryString = '';
				if (title) 
					queryString += `&title=${title}`;
				if (description)
					queryString += `&description=${description}`;
				if (domain)
					queryString += `&domain=${domain}`;
				if (typeOfDomain)
					queryString += `&typeOfDomain=${typeOfDomain}`;
				if (cpu)
					queryString += `&cpu=${cpu}`;
				if (memory)
					queryString += `&memory=${memory}`;
				if (status)
					queryString += `&status=${status}`;
				try{
					dispatch_search_website(search_website(userId, queryString));
					if(websiteData.length==0)
						alert('לא נמצאו אתרים לפי החיפוש');

				}
				catch(error){
					return error;
				}
			} 
			catch (error) {
				console.error(error);
			}
		}
		else
		{
			try{
				await dispatch_get_website(get_website(userId));
			}
			catch(error){
				return error;
			}
			alert('שאילתת חיפוש לא חוקית - מחזיר את כל האתרים');
		}
	};
	
	return <>

		{!showFilter ? (
			<>
				<div className="search__container">
					<div className='searchBar'>
						<input type='text' className='search__input'
							placeholder="Search"
							value={searchAll}
							onChange={(e) => setSearchAll(e.target.value)}
							style={{ border: '0.1px solid #9999999', outline: 'none' }} />
						<button onClick={(e) => onSearch(e)} className="btn">
							<img src="../../loupe.png" className="btnIcon" alt="Search" />
							<span className="tooltip">Search</span>
						</button>
						<button onClick={(e) => onFilter(e)} className="btn">
							<img src="../../edit.png" className="btnIcon" alt="Search" />
							<span className="tooltip">Filter</span>
						</button>
					</div>
				</div>
			</>
		) : (
			<div id='divFilter'>
				<div id="border2">
					<button type='button' className='btn' id='closeBtn' onClick={() => onCancel()}><img src={'../../close.png'} className='btnIcon' /></button>
					<form onSubmit={(e) => onSearch(e)}>
						<TextField id="standard-basic"
							size='small'
							className='textField'
							label="Title"
							variant="standard"
							onChange={(e) => setTitle(e.target.value)}
							value={title} />
						<br />
						<TextField id="standard-basic"
							size='small'
							className='textField'
							label="Description"
							variant="standard"
							onChange={(e) => setDescription(e.target.value)}
							value={description} />
						<br />
						<TextField id="standard-basic"
							size='small'
							className='textField'
							label="Domain"
							variant="standard"
							onChange={(e) => setDomain(e.target.value)}
							value={domain} />
						<br />
						<TextField id="standard-basic"
							size='small'
							className='textField'
							label="Type Of Domain"
							variant="standard"
							onChange={(e) => setTypeOfDomain(e.target.value)}
							value={typeOfDomain} />
						<br />
						<TextField id="standard-basic"
							size='small'
							className='textField'
							label="Memory"
							variant="standard"
							onChange={(e) => setMemory(e.target.value)}
							value={memory} />
						<br />
						<TextField
							id="standard-select-currency"
							size='small'
							className='textFieldMenu'
							select
							label="CPU"
							defaultValue=''
							variant="standard"
							onChange={(e) => setCpu(e.target.value)}
						>
							<MenuItem value='Intel Core i3'>Intel Core i3</MenuItem>
							<MenuItem value='Intel Core i5'>Intel Core i5</MenuItem>
							<MenuItem value='Intel Core i7'>Intel Core i7</MenuItem>
							<MenuItem value='Intel Xeon'>Intel Xeon</MenuItem>
							<MenuItem value='AMD Ryzen 3'>AMD Ryzen 3</MenuItem>
							<MenuItem value='AMD Ryzen 5'>AMD Ryzen 5</MenuItem>
							<MenuItem value='AMD Ryzen 7'>AMD Ryzen 7</MenuItem>
							<MenuItem value='ARM Cortex-A53'>ARM Cortex-A53</MenuItem>
							<MenuItem value='ARM Cortex-A52'>ARM Cortex-A52</MenuItem>
							<MenuItem value='ARM Cortex-A73'>ARM Cortex-A73</MenuItem>
						</TextField>
						<br />
						<TextField
							size='small'
							id="standard-basic"
							className='textFieldMenu'
							select
							label="Status"
							defaultValue=''
							variant="standard"
							onChange={(e) => setStatus(e.target.value)}
						>
							<MenuItem value='Active'>Active</MenuItem>
							<MenuItem value='About to be active'>About to be active</MenuItem>
							<MenuItem value='Inactive'>Inactive</MenuItem>
							<MenuItem value='About to be inactive'>About to be inactive</MenuItem>
							<MenuItem value='About to be deleted'>About to be deleted</MenuItem>
							<MenuItem value='Deleted'>Deleted</MenuItem>
						</TextField>
						<br /><br />
						<Button id="btnClear" type='button' label='Clear' onClick={() => newSearch()}></Button>
						<br /><br />
						<Button type='submit' primary size="large" label='Search'/>
					</form>
				</div>
			</div>
		)}
        
	</>;
};
