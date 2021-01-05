import moment from 'moment';

export const formatTime = (time: number) => {
  const convertedTime = moment.unix(time / 1000).format('MMMM Do, h:mm:ss a');
  return convertedTime;
};
