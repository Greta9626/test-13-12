export interface ICoord {
  lon: number;
  lat: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWind {
  deg: number;
  gust: number;
  speed: number;
}

export interface ICLoud {
  all: number;
}

export interface ISys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

export interface IMain {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface ICityWeather {
      coord: ICoord,
      weather: IWeather[],
      wind: IWind,
      cloud: ICLoud,
      sys: ISys,
      main: IMain,
      name: string,
      base: string,
      timezone: number,
      visibility: number,
      dt: number,
      id: number,
      cod: number
}
  

export class CityWeather {
  constructor(
    public coord: ICoord,
    public weather: IWeather[],
    public wind: IWind,
    public cloud: ICLoud,
    public sys: ISys,
    public main: IMain,
    public name: string,
    public base: string,
    public timezone: number,
    public visibility: number,
    public dt: number,
    public id: number,
    public cod: number
  ) {}

  /* public static Build(city: ICityWeather): CityWeather {
    return new this(
        city.coord,
        city.weather,
        city.wind,
        city.cloud,
        city.sys,
        city.main,
        city.name,
        city.base,
        city.timezone,
        city.visibility,
        city.dt,
        city.id,
        city.cod
    );
  } */
}
