import { Details } from "./details"
import './dashboard.css'
import { Button } from "./Button"
import { useState } from "react"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

export const Dashboard = () => {
    let navigate=useNavigate()
    const allWebsite = useSelector(state => state.allWebsite)
    const [currentWebSite,setcurrentWebSite]=useState({})
    return <>
        {
            allWebsite.map((website) =>
                <>
                    <div className="div_website">
                        <h1>{website.title}</h1>
                        <Button primary size="large" onClick={()=>{
                            setcurrentWebSite(website)
                            openForm()
                        }} label="details"/>     
                        <br></br>
                        <br></br>
                    </div>
                </>)
        }
    <div className="chat-popup" id="myForm">
            <form  className="form-container">
               
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
        <Button primary size="large" onClick={()=>{navigate('/edit')}} label="edit" />
        <br></br>
        <br></br>

        <Button primary size="large" onClick={closeForm} label="close" />

            </form>
        </div> 
        </>
}