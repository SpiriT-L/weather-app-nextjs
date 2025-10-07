'use client';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Weather from '@/components/Weather';
import Spinner from '@/components/Spinner';
import type { WeatherData } from '../types';

export default function Home() {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      // Можно добавить обработку ошибки
      setWeather(undefined);
    }
    setCity('');
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[1]" />
        <Image
          src={'/autumn.jpg'}
          alt={'autumn'}
          layout="fill"
          className="object-cover"
        />
        <div className="relative flex items-center justify-between max-w-[500px] w-full m-auto pt-20 text-white z-[2]">
          <form
            onSubmit={fetchWeather}
            className="flex items-center justify-between w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
          >
            {/* <div> */}
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent border-none text-white focus:outline-none placeholder-gray-300 w-full mr-1"
              placeholder="Enter city"
            />
            {/* </div> */}
            <button
              type="submit"
              onClick={fetchWeather}
              className="cursor-pointer p-1 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <BsSearch size={20} />
            </button>
          </form>
        </div>
        {weather && weather.main && <Weather data={weather} />}
      </>
    );
  }
}
