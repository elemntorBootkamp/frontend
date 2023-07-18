import React from 'react';
import { Header } from './Header';
import { useNavigate } from 'react-router';
import './page.css';

export const Page = () => {
	const [componnent, setcomponent] =React.useState('');
	let navigate=useNavigate();
	let login='login';
	let logout='logout';
	return (
		<>
			<Header
				component={componnent}
				onLogin={() => {
					navigate(`login/${login}`); 
					setcomponent('login');}}
        
				onLogout={() => {
					navigate(`login/${logout}`);
					setcomponent('');}}

				ondashbord={() => {
					navigate('/dashboard');
					setcomponent('dashboard');}}
				onsignup={() => {
					navigate('./signup');
					setcomponent('signup');}}
				onbackup={() => {
					navigate('./backup');
					setcomponent('backup');
				}}
			/>

			<section className="storybook-page">
				<div className="tip-wrapper">
				</div>
			</section>
		</> 
	);
};
