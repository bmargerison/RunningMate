import { VO2MAX } from './Vo2MaxTable'
import { DISTANCES } from './RaceDistancesEnum'

const getVdot = (time) => {
  const timeInSeconds = time.hours * 60 * 60 + time.minutes * 60 + time.seconds
  const timesArray = VO2MAX.map(time => time[DISTANCES[5]])
  const nearestTime = timesArray.reduce((prev, curr) => 
    Math.abs(curr - timeInSeconds) < Math.abs(prev - timeInSeconds) ? curr : prev
  );
  return VO2MAX[timesArray.findIndex(x => x === nearestTime)].vdot
}

export { getVdot }