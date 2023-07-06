import React, { useState } from 'react';

function LoginForm() {
	const [isOpen, setIsOpen] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		// Handle login logic here
		console.log(`Logging in with username: ${username} and password: ${password}`);
		setIsOpen(false);
	};

	return (
		<div>
			<button onClick={() => setIsOpen(true)}>Login</button>
			{isOpen && (
				<div className="popup">
					<div className="popup-content">
						<h2>Login Form</h2>
						<form>
							<label htmlFor="username">Username:</label>
							<input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
							<label htmlFor="password">Password:</label>
							<input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
							<button type="button" onClick={handleLogin}>Login</button>
						</form>
						<button className="close-btn" onClick={() => setIsOpen(false)}>X</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default LoginForm;