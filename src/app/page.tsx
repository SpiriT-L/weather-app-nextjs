'use client';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    });
    setCity('');
    setLoading(false);
  };

  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[1]" />
      <Image
        src={'/autumn.jpg'}
        alt={'autumn'}
        layout="fill"
        className="object-cover"
      />
      <form
        onSubmit={fetchWeather}
        className="flex items-center justify-center mt-20 z-[2]"
      >
        <div className="flex items-center justify-center space-x-4">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-800 focus:border-blue-500 focus:outline-none z-[2]"
            placeholder="Enter city"
          />
          <button
            type="submit"
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none z-[2]"
            onClick={fetchWeather}
          >
            <BsSearch size={20} />
          </button>
        </div>
      </form>
    </>
  );
}
