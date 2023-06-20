import { useNavigate, useParams } from 'react-router';
import { Button } from './Button';
import './details.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

export const Details = () => {
  let params = useParams()
  const allWebsite = useSelector(state => state.allWebsite)

  return <>
    <Button primary size="large" onClick={openForm} label="details"/>
    <div className="chat-popup" id="myForm">
            <form action="/action_page.php" className="form-container">
               
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
        <Button primary size="large"  label="edit" />
        <br></br>
        <br></br>

        <Button primary size="large" onClick={closeForm} label="close" />

            </form>
        </div> 
  </>
}