const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const getWeekDay = (date) => {
  return days[date.getDay()];
};

export const getDayTime = (date) => {
  return date.getHours() > 7 && date.getHours() < 20 ? 'day' : 'night';
};
