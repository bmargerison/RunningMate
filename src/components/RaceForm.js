import React from 'react'
import './RaceForm.css'

function RaceForm() {
  
  
  return (
    <div className="container time-boxes">
      <p>Recent race</p>
      <select>
        <option value="">Race distance...</option>
        <option value="5km">5km</option>
        <option value="10km">10km</option>
        <option value="Half">Half marathon</option>
        <option value="Marathon">Marathon</option>
      </select>
      <div className="row">
        <p>Racetime</p>
        <div className="col">
          <fieldset>
            <label>
              <input type="number" placeholder="Hours"/>
            </label>
          </fieldset>
        </div>
        <div className="col">
          <fieldset>
            <label>
              <input type="number" placeholder="Minutes"/>
            </label>
          </fieldset>
        </div>
        <div className="col">
          <fieldset>
            <label>
              <input type="number" placeholder="Seconds"/>
            </label>
          </fieldset>
        </div>
      </div>
    </div>      
  )
}

export default RaceForm
