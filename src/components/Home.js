import React from 'react'
import './Home.css'

function Home() {
  
  
  return (
    <div className="container min-vh-100">
      <form>
        <div className="container p-5 time-boxes">
          <div className="row">
            <div className="col box m-3">
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
                  <div className="col shadow">
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
            <div className="col box m-3">
            </div>
          </div>
          <div className="row">
            <div className="col box m-3">
            </div>
            <div className="col box m-3">
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Home

const style = {
  control: (base) => ({
    ...base,
    boxShadow: "none"
  })
}