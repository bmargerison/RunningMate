import React from 'react'
import './Results.css'
import RaceTimes from './RaceTimes'
import TrainingPaces from './TrainingPaces'
import { useLocation } from 'react-router-dom';

function Results() {
  const location = useLocation();

  return (
    <div className="container p-4">
      <div className="row mt-3">
        <div className="container box vdot-box">
          <div className="row p-1">
            <h4>Your VDOT is:</h4>
          </div>
          <div className="row p-2 text-center">
            <h1>{location.state.times.vdot}</h1>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="container box">
          <RaceTimes />
        </div>
      </div>
      <div className="row mt-4">
        <div className="container box">
          <TrainingPaces />
        </div>
      </div>
    </div>
  )
}

export default Results
