export interface City {
  main: {
    temp: string;
    temp_min: string;
    temp_max: string;
    humidity: string;
    pressure: string;
  }
  wind: {
    speed: string;
  },
  weather: {
    icon: string;
  },
  clouds: number;
  name: string;
  sys: {
    sunrise: number;
    sunset: number;
  },
  timezone: number;
  dt: number;
}
