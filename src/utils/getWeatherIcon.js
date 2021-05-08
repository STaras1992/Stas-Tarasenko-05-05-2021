import sun1 from '../assets/weatherIcons/sun1.png';
import sun2 from '../assets/weatherIcons/sun2.png';
import clear1 from '../assets/weatherIcons/clear1.png';
import clear2 from '../assets/weatherIcons/clear2.png';
import clouds1 from '../assets/weatherIcons/clouds1.png';
import clouds2 from '../assets/weatherIcons/clouds2.png';
import cold from '../assets/weatherIcons/cold.png';
import hot from '../assets/weatherIcons/hot.png';
import rain1 from '../assets/weatherIcons/rain1.png';
import rain2 from '../assets/weatherIcons/rain2.png';
import rain3 from '../assets/weatherIcons/rain3.png';
import snow1 from '../assets/weatherIcons/snow1.png';
import snow2 from '../assets/weatherIcons/snow2.png';

const getWeatherIcon = (num) => {
  if (num <= 2) return sun1;
  else if (num <= 6) return sun2;
  else if (num <= 11) return clouds1;
  else if (num <= 14) return rain1;
  else if (num <= 18) return rain2;
  else if (num <= 21) return sun2;
  else if (num <= 24) return snow1;
  else if (num <= 29) return clouds2;
  else if (num === 30) return hot;
  else if (num === 31) return cold;
  else if (num <= 38) return clear2;
  else return clouds2;
};

export default getWeatherIcon;
