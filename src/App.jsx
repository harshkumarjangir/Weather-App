import TopButtons from "./components/TopButtons";
import Input from "./components/Input";
import TimeLocation from "./components/TimeLocation";
import TempAndDetails from "./components/TempAndDetails";
import ForeCast from "./components/ForeCast";
// import getWeatherData from "./services/weatherService";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {

  const [query, setQuery] = useState({ q: 'ahmedabad' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {

    const cityName = query.q ? query.q : 'current location'
     toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}...`);

    // const data = await getFormattedWeatherData({ q: 'ahmedabad'});
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
      setWeather(data)
    });
    console.log(data);
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  // getWeather();

  const formatBackground = () => {
    if (!weather) return 'from-cyan-600 to-blue-700';
    const threshold = units === 'metric' ? 20 : 60
    if(weather.temp <= threshold) return 'from-cyan-600 to-blue-700';
    return 'from-yellow-600 to-orange-700';
  }

  return (
    // max-w-screen-lg
    <div className={`mx-auto max-w-5xl my-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Input setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <>
          <TimeLocation weather={weather} />
          <TempAndDetails weather={weather} units={units} />
          <ForeCast title='3 hour step forecast' data={weather.hourly} />
          <ForeCast title='daily forecast' data={weather.daily} />
        </>
      )}

      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
    </div>
  )
}

export default App