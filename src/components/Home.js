import React, { useState } from 'react'
import './Home.css'
import RaceForm from './RaceForm'
import ErrorControl from './ErrorControl'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setData } from '../features/stats'
import * as calcs from '../data/Calculator'

function Home() {
  const dispatch = useDispatch();
  const [time, setTime] = useState({
    distance: '',
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    try {
      dispatch(setData(calcs.getUserRunningData(time)));
      navigate('/results');
    } catch (error) {
      setErrorMessage(error.message);
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
