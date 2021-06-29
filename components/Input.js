import React from 'react'
import Input from '@material-ui/core/Input';
import {Button} from "@material-ui/core"
import "./Input.css";

const Inputer = ({input,setInput,findWeather}) => {
   const handlechange=(event)=>{
       setInput(event.target.value)
   };
   const handleClick=(event)=>{
       event.preventDefault();
       findWeather();
   }
   
    return (
        <div className="inputBox">
            <div className="inputBox__field">
               <h1> Siva Weather App </h1>
               <p>Powered by</p>
               <img src="https://i.pinimg.com/originals/ff/f6/97/fff69705d4a0918ce7233029aeb1ffc4.png"/>
               <br></br>
               <form>
               <Input placeholder="Enter The City Name" onChange={handlechange} value={input}/> 
               <br></br>
               <Button variant="contained" color="primary" type="submit" onClick={handleClick}>Search
               </Button>
               </form>
            </div>
        </div>
    )
}

export default Inputer
