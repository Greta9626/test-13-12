import { ICoord, IWeather, IWind, ISys, IMain } from './../../interface';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.scss'],
})
export class DisplayWeatherComponent implements OnInit {

  coord!: ICoord;
  weather!: number;
  wind!: IWind;
  sys!: ISys;
  main!: IMain;
  base!: string;
  name!: string;
  timezone!: number;

  print!: Observable<IWeather>;
  propNames!: string[];
  description: any;
  image: any;

  city!: string;
  imgUrlFormattato!: string;


  constructor(private weatherService: WeatherService) {}

  date: Date = new Date;

  ngOnInit(): void {
    this.weatherService.getCityWeather('Londra').subscribe((elem) => {
      

      this.name = elem.name;
      this.weather = elem.main.temp;
      this.description = elem.weather[0].description;
      this.image = elem.weather[0].icon;
      this.imgUrlFormattato = "http://openweathermap.org/img/wn/" + this.image + ".png"

      /* this.propNames = (Object.keys(elem)); */
      /* elem.weather.map((item: IWeather) => this.weather = item); */
      /* this.weather = elem.weather[0]; */

      this.main = elem.main;
     /*  this.wind = elem.wind.speed; */
     
    });

  }
  onFindCity(){
    this.weatherService.getCityWeather(this.city).subscribe((elem) => {
      this.name = elem.name;
      this.weather = elem.main.temp;
      this.description = elem.weather[0].description;
      this.image = elem.weather[0].icon;
      this.imgUrlFormattato = "http://openweathermap.org/img/wn/" + this.image + ".png"

      console.log(this.city);
      
    })
  }
}
