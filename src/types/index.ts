export interface WeatherData {
  main?: {
    temp?: number;
    feels_like?: number;
    humidity?: number;
    [key: string]: number | undefined;
  };
  weather?: {
    icon: string;
    main: string;
  }[];
  name?: string;
  wind?: {
    speed?: number;
    deg?: number;
    gust?: number;
  };
}
