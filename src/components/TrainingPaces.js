import React from 'react'
import './TrainingPaces.css'
import { useLocation } from 'react-router-dom';
import * as calcs from '../data/Calculator'

function TrainingPaces() {
  const location = useLocation();
  console.log(location.state.times)

  return (
    <div className="container">
      <div className="row p-1">
        <h4>Your predicted race times are:</h4>
      </div>
      <div className="row px-3 py-1">
      {
        Object.keys(location.state.times.trainingPaces).map(function(distance, i) {
          return (
            <div className="col px-4" key={i}>
              <div className="row">
                {distance}
              </div>
              <div className="row">
                {calcs.getTime(location.state.times.trainingPaces[distance])}
              </div>
          </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default TrainingPaces