/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from './Button';
export { Card };

const Card = ({ title, description, img, deatail1Title, deatail2Title, deatail3Title, deatail1, deatail2, deatail3 }) => {
   
    
	return(
      
		<div className="cards">
      
			<div className="card">
      
				<img src={img} style={{ width: '50px' }} className='icon'></img>
				<h2 className="title">{title}</h2>
				<p className="info">{description}</p>
				<ul className="info">
					<li>
						<h3>{deatail1Title}{deatail1}</h3>
					</li>
					<li>
						<h3>{deatail2Title}{deatail2}</h3>
					</li>
					<li>
						<h3>{deatail3Title}{deatail3}</h3>
					</li>
				</ul>
				<Button label='more deatails'></Button>
                      
			</div>
		</div>
        
	);
};

export default Card;
