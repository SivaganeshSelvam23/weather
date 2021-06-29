import React from 'react'
import './Result.css';
import {Button} from "@material-ui/core"
const Result = ({temp,desc,icon,setTemp}) => {

    return (
        <div className="result">
            <div className="result__box">
               <h1>Temp : {temp} °C</h1>
               <p>{desc}</p>
               <img src={icon} alt="logo"/>
               <br></br>
               <Button varient="contained" color="default" onClick={()=>{setTemp("");}}>Back</Button>
            </div>
        </div>
    )
}

export default Result
