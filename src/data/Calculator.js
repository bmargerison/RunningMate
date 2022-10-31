import { VO2MAX } from './Vo2MaxTable'
import { TRAINING_PACE } from './TrainingPaceTable';

const getUserRunningData = (time) => {
  const timeInSeconds = time.hours * 60 * 60 + time.minutes * 60 + time.seconds;
  const vdot = getVdot(timeInSeconds, time.distance);
  const runningData = getTrainingIntensities(vdot);
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

const getTrainingIntensities = (vdot) => {
  return TRAINING_PACE.filter(paces => paces.vdot === vdot)[0];
}

const getRacePace = (vdot) => {
  return VO2MAX.filter(paces => paces.vdot === vdot)[0];
}

export { getVdot, getTrainingIntensities, getUserRunningData }