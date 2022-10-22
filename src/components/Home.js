import React, { useState } from 'react'
import './Home.css'
import RaceForm from './RaceForm'
import { useNavigate } from 'react-router-dom';
import * as calcs from '../data/Calculator'

function Home() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const navigate = useNavigate();

  const handleSubmit = event => {
    calcs.getVdot(time)
    navigate('/results');
  }

  const handleTime = newTime => {
    const key = Object.keys(newTime)[0];
    const value = parseInt(newTime[key]);
    setTime({...time, [key]: value})
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
