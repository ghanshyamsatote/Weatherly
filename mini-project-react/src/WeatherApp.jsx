
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import {useState} from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState(
        {
            city:"pune",
            feelslike:24.84,
            temp:25.85,
            tempMin:25.05,
            tempMax:25.05,
            humidity:47,
            weather:"Haze"
        }
        
    );
    let updateinfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateinfo={updateinfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
};