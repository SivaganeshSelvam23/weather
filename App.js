import Input from './components/Input'
import Result from './components/Result'
import './App.css';
import {useState} from 'react';
import axios from "axios";

function App() {
  const [input, setInput] = useState("") ;
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const findWeather=async()=>{
    const apiKey = "6022379bfe9f35bc2ff6625ce7414edb";
    const unit = "metric";
    const url ="https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=" + apiKey + "&units=" + unit;
    const response = await axios.get(url); 
    console.log(response);
    const temp= await response.data.main.temp;
    const description = await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;
    const imageURL="https://openweathermap.org/img/wn/"+ icon + "@2x.png";
    setTemp(temp);
    setDescription(description);
    setIcon(imageURL);
    setInput("");
  };
  return (
    <div className="app">
      {temp==="" ?
      (<Input input={input} setInput={setInput} findWeather={findWeather}/>)
             : 
      (<Result temp={temp} desc={description} icon={icon} setTemp={setTemp}/>)
      }
    </div>
  );
}

export default App;
