import { useEffect, useState } from 'react';
import { getAllWebsites } from '../api/api';
import { useDispatch } from 'react-redux';
import { set_all_website } from '../redux/dataActions';
import { Card } from '../components/card';
import Button from '@mui/material/Button';
import './card.css';
import { useNavigate } from 'react-router';
export const Dashboard = () => {

	const [allwebsites, setallwebsites] = useState([]);
	const dispatch = useDispatch();
    const navigate=useNavigate();
	useEffect(() => {
		async function fetchData() {
			const response = await getAllWebsites();
			dispatch(set_all_website(response))
			setallwebsites(response);
		}
		fetchData();
	}, []);

	return <>
		{
			(allwebsites !== undefined && allwebsites.length > 0) && (
				allwebsites.map((website) =>
					<div className='allCards' key={website._id}>
						<div className="cards" >
							<Card key={website.id} website={website}></Card>
						</div>
					</div>
				)
			)
		}
		<Button variant="outlined" size="large" className='buttonAdd'
		onClick={()=>{
			navigate(`../editoradd/add`)}}>
          +
        </Button>
	</>;

};