import React from "react";
import { Button } from "./Button";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import "./dashboard.css";

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
const set=()=>{

}
export const Dashboard = () => {
  let navigate = useNavigate();
  const allWebsites = useSelector((state) => state.allWebsite);
  const [allWebsite,setallWebsites] =useState([...allWebsites])
  const [currentWebSite, setcurrentWebSite] = useState({});
  const [popup, setpopup] = useState("0%");
 
  const handleBoxClick = (id) => {
    setallWebsites((web) =>
      web.map((website) =>
      website.id === id ? { ...website, showDetails: !website.showDetails } : website
      )
    );
  };
  return (
    <>
      {allWebsite.map((website) => (
          <div key={website.title} id="container" className="div_website" >
            <div className="box">
              <h1>{website.title}</h1>
              <Button
                primary
                size="large"
                onClick={() => {
                //  setcurrentWebSite(website);
                  handleBoxClick(website.id)
                }}
                label="details"
              />
            </div>
            {website.showDetails && 
            <div className="details" >
              <h1>{website.title}</h1>
          <Button label='edit' onClick={() => {handleBoxClick(website.id);
        }}></Button>
        <br></br>
        <Button label='close' onClick={() => {handleBoxClick(website.id);
        }}></Button>
          </div>}
          </div>
        
      ))}
      {/* <div className="chat-popup" id="myForm">
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
          <Button
            primary
            size="large"
            onClick={() => {
              navigate("/edit");
            }}
            label="edit"
          />
          <br></br>
          <br></br>
          <Button primary size="large" onClick={closeForm} label="close" />
        </form>
      </div> */}
      <Outlet></Outlet>
    </>
  );
};
