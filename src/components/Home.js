import React, { useState } from 'react'
import './Home.css'
import RaceForm from './RaceForm'
import ErrorControl from './ErrorControl'
import { useNavigate } from 'react-router-dom';
import * as calcs from '../data/Calculator'

function Home() {
  const [time, setTime] = useState({
    distance: '',
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [errorMessage, setErrorMessage] = useState('error message');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    try {
      throw new Error('Wrong information')
      navigate('/results', {state:{times:calcs.getUserRunningData(time)}});
    } catch {

    }
  }

  const handleTime = newTime => {
    const key = Object.keys(newTime)[0];
    let value;
    key === "distance" ? value = newTime[key] : value = parseInt(newTime[key]);
    setTime({...time, [key]: value});
  }
  
  return (
    <div className="container time-boxes p-4">
      <form onSubmit={handleSubmit}>
        <div className="row align-content-center">
          <div className="box m-3">
            <RaceForm handleTime={handleTime}/>
            <div className="pt-3">
              <ErrorControl errorMessage={errorMessage}/>
            </div>
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
