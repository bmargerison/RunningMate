import React from 'react'
import './TrainingPaces.css'
import * as calcs from '../data/Calculator'

function TrainingPaces(props) {
  const trainingPaces = props.trainingPaces;

  return (
    <div className="container">
      <div className="row p-1">
        <h4>Your recommended training paces are:</h4>
      </div>
      <div className="row px-3 py-1">
      {
        Object.keys(trainingPaces).map(function(distance, i) {
          return (
            <div className="col px-4" key={i}>
              <div className="row">
                {distance}
              </div>
              <div className="row">
                {calcs.getTime(trainingPaces[distance])}
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