import React from 'react'
import './Results.css'
import { DISTANCES } from '../data/RaceDistancesEnum'

function Results() {
  
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
              <div className="col">
                <div className="row">
                  {DISTANCES[5]}
                </div>
                <div className="row">
                  1:30
                </div>
              </div>
              <div className="col">
                <div className="row">
                  {DISTANCES[10]}
                </div>
                <div className="row">
                  1:30
                </div>
              </div>
              <div className="col">
                <div className="row">
                  {DISTANCES.Half}
                </div>
                <div className="row">
                  1:30
                </div>
              </div>
              <div className="col">
                <div className="row">
                  {DISTANCES.Marathon}
                </div>
                <div className="row">
                  1:30
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Results
