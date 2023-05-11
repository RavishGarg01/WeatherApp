import React, { useEffect, useState } from 'react';
import '../Css/module.css';
export default function Tempapp() {

  const [city , setCity] = useState(null);
  const [search , setSearch] = useState("Jalandhar");

  useEffect(()=>{
    
    const fetchApi = async()=>{
      const Url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9f825fa32169253bee069806314d4d4a`;
      const response = await fetch(Url);
      const resJson = await response.json();
      console.log(resJson)
      setCity(resJson.main);

    }


    fetchApi();

  },[search])

  return (

  

    <div>
       <div className="main">
          <div className="box text-center">
            <input type="text" onChange={(event)=>{
              setSearch(event.target.value); 
            }} 
              placeholder="Search City" />

              {
                !city?(
                  <p>NO Data Found</p>
                ) :(
                  <>
                  <div className="info">
                  <h2> <i class="fa-solid fa-street-view fa-xl"></i>  {search}</h2>
                   <h1 className='temp'>{city.temp}°C</h1>
                   </div>
                   <br/>
                   <br/>
       
                   <p>Min-Temprature : {city.temp_min} °C </p>    
                   <p>Max-Temprature : {city.temp_max} °C</p>
                 
                 </>
                )
              }
            </div>
             

           
        </div>
    </div>
  )
}
