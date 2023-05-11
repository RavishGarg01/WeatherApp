import React from 'react'
import './css/style.css'
export default function Tempapp() {
  return (
    <div>
       <div class="main">
          <div class="box text-center">
            <input type="text" placeholder="Search City" />
            <button type="button" class="btn btn-success">Search</button>
            <h2> Temprature At Jalandhar</h2>
            <h1>19 C</h1>
            <h4>Min-Temprature : 15 C | Max-Temprature : 25 C</h4>
          </div>
        </div>
    </div>
  )
}
