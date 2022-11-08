import React from 'react'
import { useLocation } from 'react-router-dom';
import './Results.css'
import { DISTANCES } from '../data/RaceDistancesEnum'

function Results() {
  const location = useLocation();
  console.log(location.state.times)
  
  return (
    <div className="container p-4">
        <div className="row mt-3">
          <div className="container box vdot-box">
            <div className="row p-1">
              <h4>Your VDOT is:</h4>
            </div>
            <div className="row p-2 text-center">
              <h1>30</h1>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="container box">
            <div className="row p-1">
              <h4>Your predicted race times are:</h4>
            </div>
            <div className="row px-3 py-1">
            {
              Object.keys(location.state.times.racePaces).map(function(distance, time) {
                return (
                  <div className="col">
                  <div className="row">
                    {distance}
  
                  </div>
                  <div className="row">
                    {location.state.times.racePaces[distance]}
                  </div>
                </div>
                )
              })
            }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Results
