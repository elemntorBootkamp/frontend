import { Button } from "./Button"
import { useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import './dashboard.css'
import { set_current_websie } from "../redux/dataActions"

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

export const Dashboard = () => {
    let navigate = useNavigate()
    let dispatch=useDispatch()
    const allWebsite = useSelector(state => state.allWebsite)
    const [currentWebSite, setcurrentWebSite] = useState({})
    return <>
        {
            allWebsite.map((website) =>
                <>
                    <div className="div_website">
                        <h1>{website.title}</h1>
                        <Button primary size="large" onClick={() => {
                            setcurrentWebSite(website)
                            openForm()
                        }} label="details" />
                        <br></br>
                        <br></br>
                    </div>
                </>)
        }
        {
            currentWebSite !== undefined && currentWebSite !== null
            &&
            <div className="chat-popup" id="myForm">
                <form className="form-container">

                    {Object.keys(currentWebSite).map((key, index) => {
                        return (
                            <div key={index}>
                                <h2>
                                    {key}: {currentWebSite[key]}
                                </h2>
                                <hr />
                            </div>
                        );
                    })}
                    <Button primary size="large" onClick={() => { 
                        dispatch(set_current_websie(currentWebSite))
                        navigate(`/edit`) 
                        }} label="edit" />
                    <br></br>
                    <br></br>

                    <Button primary size='large' onClick={closeForm} label="close" />

                </form>
            </div>
        }

    </>
}