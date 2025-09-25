import axios from 'axios';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <BsSearch />
    </>
  );
}
