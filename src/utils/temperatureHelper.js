export const fToC = (fTemperature) => {
  return ((fTemperature - 32) * 5) / 9;
};

export const calcAverageTemperature = (min = 0, max = 100, units = 'c') => {
  const average = (min + max) / 2;
  return units === 'f' ? average : fToC(average);
};
