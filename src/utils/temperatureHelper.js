export const fToC = (fTemperature) => {
  return ((fTemperature - 32) * 5) / 9;
};

export const calcAverageTemperature = (min = 0, max = 100, units = 'c') => {
  let average = (min + max) / 2;
  average = units === 'f' ? average : fToC(average);
  return Number(Math.round(average));
};
