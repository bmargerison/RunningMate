import { VO2MAX } from './Vo2MaxTable'
import { TRAINING_PACE } from './TrainingPaceTable';
import { DISTANCES } from './RaceDistancesEnum';

const getUserRunningData = (time) => {
  const vdot = getVdot(getTimeInSeconds(time), time.distance);
  const runningData = { vdot: vdot };
  runningData.trainingPaces = getTrainingIntensities(vdot);
  runningData.racePaces = getRacePace(vdot);
  return runningData;
}

const getVdot = (time, distance) => {
  const timesArray = VO2MAX.map(dist => dist[distance]);
  const nearestTime = timesArray.reduce((prev, curr) => 
    Math.abs(curr - time) < Math.abs(prev - time) ? curr : prev
  );
  return VO2MAX[timesArray.findIndex(x => x === nearestTime)].vdot;
}

const getTime = (timeInSeconds) => {
  const date = new Date(null);
  date.setSeconds(timeInSeconds);
  return date.toISOString().substring(11, 19);
}

const getTimeInSeconds = (time) => {
 return time.hours * 60 * 60 + time.minutes * 60 + time.seconds;
}

const getTrainingIntensities = (vdot) => {
  const trainingPaces = TRAINING_PACE.map(paces => paces.vdot === vdot)[0];
  delete trainingPaces['vdot'];
  return trainingPaces;
}

const getRacePace = (vdot) => {
  const racePaces = VO2MAX.map(paces => paces.vdot === vdot)[0];
  delete racePaces['vdot'];
  return racePaces;
}

const checkData = (time) => {
  if (!time.distance) {
    throw new Error('Please select a race distance')
  }
  checkTimeLimits(time.distance, getTimeInSeconds(time))
}

const checkTimeLimits = (distance, time) => {
  switch (distance) {
    case DISTANCES[5]:
      if (time < 757) {throw new Error('Please enter a value above 13 mins')};
      if (time > 2100) {throw new Error('Please enter a value below 35 mins')};
      break;
    case DISTANCES[10]:
      if (time < 1579) {throw new Error('Please enter a value above 26 mins')};
      if (time > 4200) {throw new Error('Please enter a value below 1 hour 10 mins')};
      break;
    case DISTANCES['Half']:
      if (time < 3470) {throw new Error('Please enter a value above 58 mins')};
      if (time > 900) {throw new Error('Please enter a value below 2 hours 30 mins')};
      break;
    default:
      if (time < 7270) {throw new Error('Please enter a value above 2 hours')};
      if (time > 18000) {throw new Error('Please enter a value below 5 hours')};
      break;
  }
}

export { getVdot, getTrainingIntensities, getUserRunningData, getTimeInSeconds, getTime, checkData }