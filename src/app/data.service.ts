import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
  
  constructor(private _http:Http) { }

  getWeather(city, cb) { //APP ID adds in APP Key #
    this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=63d3108576596a0fd5b8e8da9afb6f8a`).subscribe(
      (res) => {
        cb(res.json());
      }
    )
  }

}
