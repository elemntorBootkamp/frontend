import React from "react";
import { Button } from "./Button";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { set_current_websie } from "../redux/dataActions";
import "./dashboard.css";

export const Dashboard = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const allWebsites = useSelector((state) => state.allWebsite);
  const [allWebsite, setallWebsites] = useState([...allWebsites]);

  const handleBoxClick = (id) => {
    setallWebsites((web) =>
      web.map((website) =>
        website.id === id
          ? { ...website, showDetails: !website.showDetails }
          : website
      )
    );
  };
  return (
    <>
      {allWebsite.map((website) => (
        <div key={website.title} id="container" className="div_website">
          <div >
            <h1>{website.title}</h1>
            <Button
              id="BtnDetails"
              primary
              size="large"
              onClick={() => {
                handleBoxClick(website.id);
              }}
              label="details"
            />
          </div>
          {website.showDetails && (
            <div className="details">
                
                <a className="closebtn"  onClick={() => {
                  handleBoxClick(website.id);
                }}>&times;</a>
              {Object.keys(website).map((key, index) => {
                return (
                  <div key={index}>
                    <p>
                      {key}:{website[key]}
                    </p>
                  </div>
                );
              })}
              <Button
              primary
                size="small"
                onClick={() => {
                  navigate("/edit");
                }}
                label="edit"
              />
            </div>
          )}
        </div>
      ))}
      <Outlet></Outlet>
    </>
  );
};
