import React from 'react'
import './Home.css'
import RaceForm from './RaceForm'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    navigate('/results');
  }

  const handleTime = newTime => {
    console.log(newTime)
  }
  
  
  return (
    <div className="container time-boxes p-4">
      <form onSubmit={handleSubmit}>
        <div className="row align-content-center">
          <div className="box m-3">
            <RaceForm handleTime={handleTime}/>
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
