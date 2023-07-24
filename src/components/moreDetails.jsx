import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from './button';
import { useNavigate } from 'react-router';
import { getAllWebsites } from '../API/api';
import { set_website } from '../redux/dataActions';
import './moreDetails.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import { deleteWebsite } from '../API/api';

export const MoreDetails = ({ website }) => {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [showConfirmation, setShowConfirmation] = useState(false);

	const handleDelete = async () => {
		await deleteWebsite(website._id, '1234');
		const response = await getAllWebsites();
		dispatch(set_website(response));
		setShowConfirmation(false);
	};

	const handleCancel = () => {
		setShowConfirmation(false);
	};

	return <>
		<div id="divDetails">
			<img src={website.websiteLogo} style={{ width: '50px' }}></img>
			<h3>{website.title}</h3>
			<h4>{website.description}</h4>
			<label>The site requires a processor {website.cpu}
				and size memory {website.memory}. The site status{' ' + website.status + '. '}
				{
					website.domain.length > 0 &&
					<>
						You can access the website at: www.{website.domain.map((domain) => <label key={domain}> {domain} </label>)}
					</>
				}</label>

			<div id="buttonMoreDetails">
				<Tooltip title="Edit" placement="top">
					<IconButton aria-label="edit" id="one" onClick={() => {
						navigate('/edit');
					}} >
						<EditIcon />
					</IconButton>
				</Tooltip>

				<Tooltip title="Delete" placement="top">
					<IconButton aria-label="delete" id="one" onClick={() => setShowConfirmation(true)}>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
				<div>
					{showConfirmation && (
						<div className='alert'>
							<p style={{ 'color': '#333' }}>Are you sure you want to delete this website?</p>
							<Button primary label='Delete' size='small' id='modalBtn' onClick={handleDelete}></Button>
							<Button size='small' label='Cancel' id='modalBtn' onClick={handleCancel}></Button>
						</div>
					)}
				</div>


			</div>

		</div>


	</>;
};

