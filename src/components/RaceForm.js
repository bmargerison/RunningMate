import React from 'react'
import './RaceForm.css'
import { DISTANCES } from '../data/RaceDistancesEnum'

const RaceForm = ({handleTime}) => {
  
  return (
    <div className="container time-boxes">
      <p>Recent race</p>
      <select onChange={(event) => handleTime({distance: event.target.value})} >
        <option value="">Race distance...</option>
        <option value={DISTANCES[5]}>5km</option>
        <option value={DISTANCES[10]}>10km</option>
        <option value={DISTANCES.Half}>Half marathon</option>
        <option value={DISTANCES.Marathon}>Marathon</option>
      </select>
      <div className="row">
        <p>Racetime</p>
        <div className="col">
          <fieldset>
            <label>
              <input
              onChange={(event) => handleTime({hours: event.target.value})} 
              type="number" 
              placeholder="Hours"/>
            </label>
          </fieldset>
        </div>
        <div className="col">
          <fieldset>
            <label>
              <input 
              onChange={(event) => handleTime({minutes: event.target.value})} 
              type="number" 
              placeholder="Minutes"/>
            </label>
          </fieldset>
        </div>
        <div className="col">
          <fieldset>
            <label>
              <input
              onChange={(event) => handleTime({seconds: event.target.value})} 
              type="number" 
              placeholder="Seconds"/>
            </label>
          </fieldset>
        </div>
      </div>
    </div>      
  )
}

export default RaceForm
