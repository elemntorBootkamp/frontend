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
              <h1>{website.title}</h1>
              {Object.keys(website).map((key, index) => {
                return (
                  <div key={index}>
                    <h2>
                      {key}: {website[key]}
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
              <Button primary size="large" label="close" />
              <Button
                primary
                size="large"
                onClick={() => {
                  dispatch(set_current_websie(website));
                  navigate(`/edit`);
                }}
                label="edit"
              />
              <br></br>
              <Button
                label="close"
                onClick={() => {
                  handleBoxClick(website.id);
                }}
              ></Button>
            </div>
          )}
        </div>
      ))}
      <Outlet></Outlet>
    </>
  );
};
