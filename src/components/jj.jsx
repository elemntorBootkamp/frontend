import React, { useState } from "react";
import "./MyComponent.css";

function MyComponent() {
  const [w,sw]=useState("0%")
  const [boxes, setBoxes] = useState([
    { id: 1, title: "Box 1", details: "Details about Box 1" },
    { id: 2, title: "Box 2", details: "Details about Box 2" },
    { id: 3, title: "Box 3", details: "Details about Box 3" },
    { id: 4, title: "Boxj 3", details: "Details nnnn about Box 3" },
  ]);

  const handleBoxClick = (id) => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === id ? { ...box, showDetails: !box.showDetails } : box
      )
    );
  };


  return (
    <div className="container">
      {boxes.map((box) => (<>
        <div key={box.id} id="container1" className="box1" style={{height:w,transition:"5s",backgroundColor:"red"}}>
          <div><h3>{box.title}</h3>
          <button onClick={() =>{ handleBoxClick(box.id);
             sw("100%")}} ></button>
          </div >
          {box.showDetails && <div className="details" >{box.details}
          <button onClick={() => {handleBoxClick(website.id);
        }}></button>
          </div>}
        </div>
      </>))} 
    </div>
  );
}

export default MyComponent;
