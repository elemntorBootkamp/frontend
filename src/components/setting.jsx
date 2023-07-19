import React, { useState } from 'react';// eslint-disable-next-line no-unused-vars
import { TextField, Button, FormControl } from '@material-ui/core';
import { useSelector } from 'react-redux';
// import {currentUser } from '../Redux/dataReducer';
// import { ourStore } from '../Redux/myStore';


export const Form1 = () => {
	let currentUserFromStore = useSelector((ourStore) => {
		return ourStore.currentUser;
	});
	const [isEditing, setIsEditing] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [firstName, setFirstName] = useState(currentUserFromStore.name);
	// eslint-disable-next-line no-unused-vars
	const [email, setEmail] = useState(currentUserFromStore.email);
	// eslint-disable-next-line no-unused-vars
	const [phone, setPhone] = useState(currentUserFromStore.phone);

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleSave = () => {
		// Save changes to user's profile
		setIsEditing(false);
	};

	return (


		<>
			<div style={{ backgroundColor: 'white', width: '50%', height: '50%' }}>
				<br />
				<div>
					<label htmlFor="firstName">First Name:</label>
					<input type="text" id="firstName" value={currentUserFromStore.name} disabled={!isEditing}
						onChange={(e) => setFirstName(e.target.value)} />
				</div>
				<br />
				<TextField id="outlined-basic" label="Name" variant="outlined" value={currentUserFromStore.name}
				
					disabled={!isEditing} onChange={(e) => setFirstName(e.target.value)} />
				<br />
				<TextField id="filled-basic" label="email" variant="filled" value={currentUserFromStore.email}
					disabled={!isEditing} onChange={(e) => setEmail(e.target.value)} />
				<br />
				<TextField id="standard-basic" label="Standard" variant="standard" value={currentUserFromStore.phone}
					disabled={!isEditing} onChange={(e) => setPhone(e.target.value)} />
				<br></br>
				<br></br>
				<br></br>
				{isEditing ? (
					<button type="button" onClick={handleSave}>Save</button>
				) : (
					<button type="button" onClick={handleEdit}>Edit</button>
				)}
			</div>
		</>
	);
};

