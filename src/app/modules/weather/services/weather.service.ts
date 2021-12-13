import { environment } from './../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly http: HttpClient) { }

  public getCityWeather(cityName: string): Observable<any> {
    const params = new HttpParams()
    .set('q', cityName)
    .set('lang', 'it')
    .set('units', 'metric')
    .set('APPID', '803843ad21d561d13a4077a5deae1a77');

    return this.http.get<any>(`${environment.apiUrl}`, { params })
    
    /* return this.http.get<any>('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=803843ad21d561d13a4077a5deae1a77') */

    /* return this.http.get<{ city: ICityWeather[] }>(`${environment.apiUrl}`, { params })
    .pipe(
      map(response => response.city.map((elem: ICityWeather) => CityWeather.Build(elem)))
    ); */
  }
}
