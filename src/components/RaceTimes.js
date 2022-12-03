import React from 'react'
import { useLocation } from 'react-router-dom';
import './RaceTimes.css'
import * as calcs from '../data/Calculator'

function RaceTimes(props) {
  const racePaces = props.racePaces;
  
  return (
    <div className="container">
      <div className="row p-1">
        <h4>Your predicted race times are:</h4>
      </div>
      <div className="row px-3 py-1">
      {
        Object.keys(racePaces).map(function(distance, i) {
          return (
            <div className="col px-4" key={i}>
              <div className="row">
                {distance}
              </div>
              <div className="row">
                {calcs.getTime(racePaces[distance])}
              </div>
          </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default RaceTimes
