import { useDispatch } from 'react-redux';
import { Button } from './button';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { MoreDetails } from './moreDetails';
import './card.css';

export const Card = ({ website }) => {
	const [style, setStyle] = useState('none')

	return (

			<div className="card" >
				<img src={website.websiteLogo} style={{ height: '40px' }}></img>
				<h2 className="title">{website.title}</h2>
				<p className="info">{website.description}</p>
				<Button label='more details' onClick={() => { setStyle('block') }} ></Button>
				<div id="id01" className="modal" style={{ display: style === 'none' ? 'none' : 'block' }}>
					<div className="modalContent animate" >
						<div className="imgcontainer">
							<span onClick={() => { setStyle('none') }} className="close" title="Close Modal">&times;</span>
						</div>
						<div className="container">
							{
								style !== 'none' &&
								<MoreDetails website={website}></MoreDetails>
							}
						</div>
					</div>
				</div>

		</div>

	);
};

