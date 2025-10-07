import React from 'react';
import Image from 'next/image';
import type { WeatherData } from '../types';

interface WeatherProps {
  data: WeatherData;
}

const Weather: React.FC<WeatherProps> = ({ data }) => {
  return (
    <>
      <div className="relative flex flex-col justify-between max-w-[500px] w-full mt-20 m-auto p-4 text-gray-300 z-[2]">
        <div className="relative flex justify-between pt-12">
          <div className="flex flex-col item-center">
            {data.weather && data.weather[0] && (
              <Image
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="weather icon"
                width={150}
                height={150}
              />
            )}
            <p className="text-3xl">
              {data.weather && data.weather[0] ? data.weather[0].main : ''}
            </p>
          </div>
          <p className="text-9xl">
            {data.main && data.main.temp !== undefined
              ? data.main.temp.toFixed(0)
              : ''}
            &#176;
          </p>
        </div>
        <div className="bg-black/75 p-8 mt-20">
          <p className="text-2xl text-center pb-8">
            Weather in {data.name ?? ''}
          </p>

          <div className="flex justify-between text-center">
            <div>
              <p className="font-bold text-2xl">
                {data.main && data.main.feels_like !== undefined
                  ? data.main.feels_like.toFixed(0)
                  : ''}
                &#176;
              </p>
              <p className="text-xl">Feels like</p>
            </div>
            <div>
              <p className="font-bold text-2xl">
                {data.main && data.main.humidity !== undefined
                  ? data.main.humidity.toFixed(0)
                  : ''}
              </p>
              <p className="text-xl">Humidity</p>
            </div>
            <div>
              <p className="font-bold text-2xl">
                {data.wind && data.wind.speed !== undefined
                  ? data.wind.speed.toFixed(2)
                  : ''}
                m/s
              </p>
              <p className="text-xl">Wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
