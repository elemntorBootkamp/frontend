import { useDispatch } from 'react-redux';
import { Button } from './button';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { MoreDetails } from './moreDetails';
import './card.css';

export const Card = ({ website }) => {
	const [style, setStyle] = useState('none')

	return (
		<div className="cards">
			<div className="card">
				<img src={website.logo} style={{ width: '50px' }} className='icon'></img>
				<h2 className="title">{website.title}</h2>
				<p className="info">{website.description}</p>
				<ul className="info">
					<li>
						<h3>{website.deatail1Title}{website.deatail1}</h3>
					</li>
					<li>
						<h3>{website.deatail2Title}{website.deatail2}</h3>
					</li>
					<li>
						<h3>{website.deatail3Title}{website.deatail3}</h3>
					</li>
				</ul>
			</div>
			<Button label='more details' onClick={() => { setStyle('block') }}></Button>
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

