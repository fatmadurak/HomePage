import React, { Component } from 'react';
import "./button.css";

 const Button=({color,children})=>{

  return (
    <div>
    
      <button className={`button btn ${color}`} type="submit"> {children}</button>


    </div>
  )

  }

export default Button;  