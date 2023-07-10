/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GetAllWebsite, Search_Websites } from '../API/api';
import './SearchWebsites.css';

//🧿🔍🔎☸🌐💠❇✳🔄
export const SearchWebsites = () => {

	const [searchAll, setSearchAll] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [domain, setDomain] = useState('');
	const [typeOfDomain, setTypeOfDomain] = useState('');
	const [cpu, setCpu] = useState('');
	const [memory, setMemory] = useState('');
	const [status, setStatus] = useState('');
	const [data, setData] = useState();
	const [showFilter, setShowFilter] = useState(false);
	const userName = useSelector((state) => state.manager);

	useEffect(() => {
		async function allWebsite(){
			try{
				const response = await GetAllWebsite();
				setData(response);
			}
			catch(error){
				return error;
			}
		}
		allWebsite();
	}, []);

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
		if(searchAll)
		{
			try{
				const response = await Search_Websites(userName, searchAll);
				if(response.length>0)
					setData(response);
				else
				{
					alert('לא נמצאו אתרים לפי החיפוש');
					setData();
					//או
					//alert('לא נמצאו אתרים לפי החיפוש - מחזיר את כל האתרים');
				}
			}
			catch(error){
				return error;
			}
		}
		else if(title || description || domain || typeOfDomain || cpu || memory || status)
		{
			event.preventDefault();
			alert(`title: ${title}, description: ${description}, domain: ${domain}, typeOfDomain: ${typeOfDomain}, cpu: ${cpu}, memory: ${memory}, status: ${status}`);
			try {
				let params = [];
				if (title) 
					params.push({key:'title', value:title});
				if (description)
					params.push({key:'description', value:description});
				if (domain)
					params.push({key:'domain', value:domain});
				if (typeOfDomain)
					params.push({key:'typeOfDomain', value:typeOfDomain});
				if (cpu)
					params.push({key:'cpu', value:cpu});
				if (memory)
					params.push({key:'memory', value:memory});
				if (status)
					params.push({key:'status', value:status});	
				try{
					const response = await Search_Websites(userName, params);
					if(response.length>0)
						setData(response);
					else
					{
						alert('לא נמצאו אתרים לפי החיפוש');
						setData();
						//או
						//alert('לא נמצאו אתרים לפי החיפוש - מחזיר את כל האתרים');
					}
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
			alert('שאילתת חיפוש לא חוקית - מחזיר את כל האתרים');
	};
	
	return <>
        
		<h1>SearchWebsites</h1>
		<h2>userName: {userName}</h2>
		{!showFilter ? (
			<>
				<button type='button' onClick={(e) => onSearch(e)}>🔎</button>
				<div  id='div1'>
					<button id='btnFilter' type='button' onClick={() => onFilter()}></button>
					<input type='text' value={searchAll} onChange={(e) => setSearchAll(e.target.value)} style={{ border: '0.1px solid #9999999', outline: 'none' }} />
				</div>
			</>	
		):(
			<div id='div2'>
				<form onSubmit={(e)=> onSearch(e)}>		
					
					<input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
					<label>	:כותרת</label><br/><br/>

					<input type='text' value={description} onChange={(e) => setDescription(e.target.value)}/>
					<label>	:תיאור</label><br/><br/>

					<input type='text' value={domain} onChange={(e) => setDomain(e.target.value)}/>
					<label>	:דומיין</label><br/><br/>

					<input type='text' value={typeOfDomain} onChange={(e) => setTypeOfDomain(e.target.value)}/>
					<label>	:סוג דומיין</label><br/><br/>

					{/* <input type='text' value={cpu} onChange={(e) => setCpu(e.target.value)}/> */}
					<select value={cpu} onChange={(e) => setCpu(e.target.value)}>
						<option hidden></option>
						<option>Intel Core i3</option>
						<option>Intel Core i5</option>
						<option>Intel Core i7</option>
						<option>Intel Xeon</option>
						<option>AMD Ryzen 3</option>
						<option>AMD Ryzen 5</option>
						<option>AMD Ryzen 7</option>
						<option>ARM Cortex-A53</option>
						<option>ARM Cortex-A72</option>
						<option>ARM Cortex-A73</option>
					</select> 
					<label>	:מעבד</label><br/><br/>

					<input type='text' value={memory} onChange={(e) => setMemory(e.target.value)}/>
					<label>	:זיכרון</label><br/><br/>

					<select value={status} onChange={(e) => setStatus(e.target.value)}>
						<option hidden></option>
						<option>Active</option>
						<option>About to be active</option>
						<option>Inactive</option>
						<option>About to be inactive</option>
						<option>About to be deleted</option>
						<option>Deleted</option>
					</select> 
					<label>	:סטטוס</label><br/><br/>
					
					<button type='button' onClick={() => onCancel()}>cancel</button>
					<button type='button' onClick={() => newSearch()}>clear</button>

					<input type='submit' value='search'/>

				</form> 
			</div>
		)}

		<div><br/><br/><br/>
			<h1>View all sites</h1>
			{data && data.length > 0 ? (
				<>
					{data.map((website, index) => (
						<React.Fragment key={index}>
							<img src={website.websiteLogo} alt={website.name} style={{ width: '30%', height: '30%' }} />
							<h2>{website.title}</h2>
							<p>{website._id}</p>
							<p>{website.managerId}</p>
							<p>{website.description}</p>
							<p>{website.domain}</p>
							<p>{website.typeOfDomain}</p>
							<p>{website.cpu}</p>
							<p>{website.memory}</p>
							<p>{website.status}</p>
						</React.Fragment>
					))}
				</>
			) : (
				<>
					<p>No websites found</p>
				</>
			)}
		</div>
	</>;
};

/*			{data ? (
				<>
					{data.websites.map((website, index) => (
						<>
							<img src={website.websiteLogo} alt={website.name} style={{width:'30%', height:'30%'}} />
							<h2>{website.title}</h2>
							<p>{website._id}</p>
							<p>{website.managerId}</p>
							<p>{website.description}</p>
							<p>{website.domain}</p>
							<p>{website.typeOfDomain}</p>
							<p>{website.cpu}</p>
							<p>{website.memory}</p>
							<p>{website.status}</p> 		 
						</>
					))}
				</>
			) : (
				<p>No websites found</p>
			)}*/








// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { GetAllWebsite, GetWebsiteByUserName, Search_Websites } from '../API/api';

// export const SearchWebsites = () => {  //{searchType, searchWords, websiteList}

// 	const [websiteName, setWebsiteName] = useState('');
// 	const [siteCreationDate, setSiteCreationDate] = useState('');
// 	const [permissionType, setPermissionType] = useState('');
// 	const userName = useSelector((state) => state.manager);
// 	const [data, setData] = useState();
// 	const [data1, setData1] = useState();


// 	useEffect(() => {
// 		async function allWebsite(){
// 			try{
// 				const response = await GetAllWebsite();
// 				setData(response);
// 			}
// 			catch(error){
// 				return error;
// 			}
// 		}
// 		allWebsite();

// 		async function websiteByUserName(){
// 			try{
// 				const response = await GetWebsiteByUserName();
// 				setData1(response);
// 			}
// 			catch(error){
// 				return error;
// 			}
// 		}
// 		websiteByUserName();
// 		// async function search_website(){
// 		// 	try{
// 		// 		const response = await Search_Websites();
// 		// 		setData(response);
// 		// 	}
// 		// 	catch(error){
// 		// 		return error;
// 		// 	}
// 		// }
// 		// search_website();
// 	}, []);

// 	const onSearch = async (event) => {
// 		if(websiteName || siteCreationDate || permissionType)
// 		{
// 			event.preventDefault();
// 			alert(`The website name: ${websiteName} The site creation date: ${siteCreationDate}The permission type: ${permissionType}`);
// 			try {
// 				// let params = '';
// 				// if (websiteName) {
// 				// 	params += 'websiteName='+websiteName;
// 				// }
// 				// if (siteCreationDate) {
// 				// 	params += '&siteCreationDate='+siteCreationDate;
// 				// }
// 				// if (permissionType) {
// 				// 	params += '&permissionType='+permissionType;
// 				// }
// 				try{
// 					const response = await Search_Websites(userName,websiteName);
// 					setData(response);
// 				}
// 				catch(error){
// 					return error;
// 				}

// 				// const response = await axios.get(`/website/:${userName}/:${websiteName}`);
// 				// setData(response.data);
// 			} 
// 			catch (error) {
// 				console.error(error);
// 			}
// 		}
// 		else
// 			alert('שאילתת חיפוש לא חוקית - מחזיר את כל האתרים');
// 	};

// 	const newSearch = () => {
// 		setWebsiteName('');
// 		setSiteCreationDate('');
// 	};


// 	return <>
        
// 		<h1>SearchWebsites</h1>
// 		<h1>{userName}</h1>

// 		<div>
// 			<form onSubmit={(e)=> onSearch(e)}>		
				
// 				<input type='text' value={websiteName} onChange={(e) => setWebsiteName(e.target.value)}/>
// 				<label>	:שם האתר</label><br/><br/>
				
// 				<input type='date' value={siteCreationDate} onChange={(e) => setSiteCreationDate(e.target.value)}/>
// 				<label>	:תאריך יצירת האתר</label><br/><br/>

// 				<select value={permissionType} onChange={(e) => setPermissionType(e.target.value)}>
// 					<option>reading</option>
// 					<option>editing</option>
// 					<option>Manager</option>
// 				</select>
// 				<label>	:סוג הרשאה</label><br/><br/>
				
// 				<button type='button' onClick={() => newSearch()}>חדש</button>

// 				<input type='submit' value='חיפוש'/>

// 			</form> 
// 		</div>

// 		<div><br/><br/><br/>
// 			<h1>View all sites</h1>
// 			{data ? (
// 				<>
// 					{data.map((website, index) => (
// 						<>
// 							<img src={website.websiteLogo} alt={website.name} style={{width:'30%', height:'30%'}} />
// 							<h2>{website.name}</h2>
// 							<p>{website.description}</p>
// 							<p>Manager: {website.manager}</p>
// 							<p>Date Published: {website.datePublished}</p>
// 							<p>Size: {website.size}</p>
// 						</>
// 					))}
// 				</>
// 			) : (
// 				<p>No websites found</p>
// 			)}
// 		</div>
// 	</>;
// };



// const params = {};
// if (websiteName) {
// 	params.websiteName = websiteName;
// }
// if (siteCreationDate) {
// 	params.siteCreationDate = siteCreationDate;
// }
// if (permissionType) {
// 	params.permissionType = permissionType;
// }
// const response = await axios.get(`/website/:${userId}`, {params,});


// const LocalWebsiteList = [
// 	{id:1,title:'aaa'},
// 	{id:2, title:'bbb'},
// 	{id:3, title:'ccc'},
// 	{id:4, title:'ddd'},
// 	{id:5, title:'eee'}
// ];

// const arr = ['titel','date'];

// const [typeSearch, setTypeSearch] = useState({type:' ', });
  
// const funTypeSearch = (type,e)=>{
// 	if(e.target.value.length > 0)
// 	{
// 		setTypeSearch(type,e.target.value);
// 	}
// };

{/* <div>
	<input type='text' onBlur={(e)=> funTypeSearch('titel',e.target.value)}>כותרת האתר</input>
	<input type='date' onBlur={(e)=> funTypeSearch('date',e.target.value)}>תאריך יצירת האתר</input>
</div> */}

///////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react'

// export const SearchWebsites = () => { //{searchType, searchWords}

//     const productList = 
//     ["blue pant"
//     , "black pant"
//     , "blue shirt"
//     , "black shoes"
//     , "brown shoes"
//     , "white pant"
//     , "white shoes"
//     , "red shirt"
//     , "gray pant"
//     , "white shirt"
//     , "golden shoes"
//     , "dark pant"
//     , "pink shirt"
//     , "yellow pant"];

//     const [products, setProducts] = useState(productList);
//     const [searchVal, setSearchVal] = useState("");

//     function handleSearchClick() 
//     {
//         if (searchVal === "")
//         { 
//             setProducts(productList); 
//             return; 
//         }
//         const filterBySearch = productList.filter((item) => {
//             if (item.toLowerCase()
//                 .includes(searchVal.toLowerCase())) { return item; }
//         })
//         setProducts(filterBySearch);
//     }
//     const mystyle = {
//         marginLeft: "600px",
//         marginTop: "20px",
//         fontWeight: "700"
//     };

//     return <>
        
//         <h1>SearchWebsites</h1>

//         <div style={mystyle}>
//             <input onChange={e => setSearchVal(e.target.value)}>
//             </input>
//             <button onClick={handleSearchClick} >חיפוש</button>
//         </div>
//         <div>
//             {products.map((product) => {
//                 return (
//                     <div style={mystyle}>{product}</div>
//                 )
//             })}
//         </div>       
//     </>
// }