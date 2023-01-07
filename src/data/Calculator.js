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
  const trainingPaces = TRAINING_PACE.filter(paces => paces.vdot === vdot)[0];
  delete trainingPaces['vdot'];
  return trainingPaces;
}

const getRacePace = (vdot) => {
  const racePaces = VO2MAX.filter(paces => paces.vdot === vdot)[0];
  delete racePaces['vdot'];
  return racePaces;
}

const checkData = (time) => {
  if (!time.distance) {
    throw new Error('Please select a race distance')
  }
  if (time.distance == DISTANCES[5] && getTimeInSeconds(time) < 757) {
    throw new Error('Please enter a value above 13 mins')
  }
}

export { getVdot, getTrainingIntensities, getUserRunningData, getTimeInSeconds, getTime, checkData }