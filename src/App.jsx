import axios from "axios";

import { useEffect, useRef, useState } from "react";
// import backgroudphoto from "./weather-xqhs9axpy8btfd3y.jpg";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  console.log(weather);
  const timerRef = useRef(null);
  let imgCondition;
  if (weather) {
    imgCondition = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const changeHandler = (e) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setCity(e.target.value);
    }, 1000);
  };

  useEffect(() => {
    const getData = async (city) => {
      const API_KEY = "cccd22707e77b1c0e1d023580ff12ba2";
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fa`
        )

        .then((res) => setWeather(res.data));
    };

    getData(city);
  }, [city]);
  return (
    <div className="bg-[url('./windows-11-landscape-scenery-sunrise-stock-day-light-2880x1800-5661.jpg')] dark:bg-[url('./night-starry-sky-forest-silhouette-astronomy-cosmos-5k-3840x2160-1679.jpg')] transition-all duration-700 bg-no-repeat  bg-cover w-[100vw] h-[100vh] text-center content-center">
      <button
        className="bg-black text-white w-3xs rounded-full dark:bg-white dark:text-black font-bold transition-all duration-700 absolute hover:cursor-pointer right-4 top-4"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "light mode ☀️" : "dark mode 🌙"}
      </button>
      <input
        className=" p-1.5 rounded-2xl  border-2 bg-amber-50 border-gray-400 outline-0 placeholder:text-gray-400 placeholder:text-sm font-medium "
        placeholder="نام شهر مورد نظر را وارد کنید ..."
        type="text"
        onChange={changeHandler}
      />
      {weather ? (
        <div className="   bg-gray-400/10 dark:bg-transparent backdrop-blur-sm  w-[300px] h-[300px] rounded-2xl m-auto mt-5 flex flex-col space-y-8 ">
          <p className="text-gray-800 font-bold text-3xl dark:text-white ">
            {weather.name}
            <sup className="bg-amber-400 dark:bg-white dark:text-gray-600 rounded-full font-bold  ">
              {weather.sys.country}
            </sup>
          </p>
          <p className="font-bold text-6xl  text-gray-700 dark:text-blue-100">
            {Math.round(weather.main.temp)} &deg;C
          </p>
          <p className="text-xl font-medium text-gray-800  dark:text-blue-100 ">
            {" "}
            {weather.weather[0].main}
          </p>
          <img className="w-20 h-20 m-auto mt-0 " src={imgCondition} alt="s" />
        </div>
      ) : null}
    </div>
  );
}

export default App;
