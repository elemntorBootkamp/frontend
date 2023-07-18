import { useEffect, useState } from "react";
import { getAllBackups } from "../api/apiBackup";
import "./card.css";
import { Button } from "./button";
import { useSelector } from "react-redux";

export const Backups=()=>{
    const [allBackup,setAllBackup]=useState([]);
	useEffect(() => {
		async function fetchData() {
			const data= await getAllBackups();
            setAllBackup(data);
		}
		fetchData();
	}, []);
    return <>
    <div className='allCards'>
    {allBackup.map((backup)=>
    <div className='cards' key={backup._id}>
    <div className="card">
    <h5>{backup.description}</h5>
    <Button label="backup"></Button>
    </div>
    </div>)
    }
    </div>
    </>
}