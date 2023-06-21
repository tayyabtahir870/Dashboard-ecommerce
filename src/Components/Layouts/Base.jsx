import React from "react";
import Slidebar from "../Elements/Slidebar";
import Header from "./Header";
import Header1 from "./Header1";

function Base(props) {
  return (

   <div>
    <Header1/>
    <div className="Home">
      
      <div className="Slidebar">

        <Slidebar />
      </div>
   
      <div className="Content">{props.children}</div>
    </div>
    </div>
  );
}

export default Base;
