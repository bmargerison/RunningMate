import React from 'react'
import './Home.css'
import RaceForm from './RaceForm'

function Home() {
  
  
  return (
    <div className="container min-vh-100 time-boxes p-4">
      <form>

          <div className="row">
            <div className="col box m-3">
              <RaceForm/>
            </div>
            <div className="col box m-3">
              <RaceForm/>
            </div>
          </div>
          <div className="row">
            <div className="col box m-3">
              <RaceForm/>
            </div>
            <div className="col box m-3">
              <RaceForm/>
            </div>
          </div>
      </form>
      <div className="button p-2">
          <input type="submit" value="Get my data" />
      </div>
    </div>
  )
}

export default Home
