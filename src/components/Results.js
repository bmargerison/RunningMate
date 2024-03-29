import React from 'react'
import './Results.css'
import RaceTimes from './RaceTimes'
import TrainingPaces from './TrainingPaces'
import { useSelector } from 'react-redux'

function Results() {
  const data = useSelector((state) => state.stats.value);
  const tooltipText = `VDOT is a measure of the amount of oxygen you consume during a 
  minute of running, and is commonly used to detemine running ability.`

  return (
    <div className="container p-4">
      <div className="row mt-3">
        <div className="container box vdot-box">
          <div className="row p-1">
            <h4>Your VDOT is:</h4>
          </div>
          <div className="row p-2 text-center">
            <h1>{data.vdot}</h1>
          </div>
          <span class="vdot-text">{tooltipText}</span>
        </div>
      </div>
      <div className="row mt-4">
        <RaceTimes racePaces={data.racePaces}/>
      </div>
      <div className="row mt-4">
        <TrainingPaces trainingPaces={data.trainingPaces}/>
      </div>
    </div>
  )
}

export default Results;
