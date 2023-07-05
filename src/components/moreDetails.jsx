import { useDispatch } from "react-redux";
import { Button } from "./button"
import { useNavigate } from "react-router"
import { set_current_websie } from "../redux/dataActions";
import './moreDetails.css';

export const MoreDetails=({website})=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    dispatch(set_current_websie(website))

    return <>
    <div id="divDetails">
    <h3>{website.title}</h3>
    <h4>{website.description}</h4>
    <label>The site requires a processor {website.cpu} 
    and size memory {website.memory}. The site status {website.status}. 
    {
        website.domain.length>0 &&
        <>
        You can access the website at: 
        {website.domain.map((domain)=><label key={domain}> {domain} </label>)}
        </>
    }</label>
    </div>
    <div id="buttonMoreDetails">
    <Button label='edit details' onClick={()=>{
        navigate('/edit')}}></Button>
    </div>
   </>
}