import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";


const Card = (props:any) => {
  return (
    <li className="card">
      <span className="material-icons">{props.icon}</span>
      <p>{props.copy}</p>
    </li>
  )
}


export default Card