import React from 'react'
import './Home.css'
import RaceForm from './RaceForm'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    navigate('/results');
  }
  
  return (
    <div className="container time-boxes p-4">
      <form onSubmit={handleSubmit}>
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
        <div className="button p-2">
            <input type="submit" value="Get my data" />
        </div>
      </form>
    </div>
  )
}

export default Home
