import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';


@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  city = 'Burbank';
  humidity;
  tempAvg;
  tempHigh;
  tempLow;
  status;

  constructor(private _dataService: DataService) {
    this._dataService.getWeather(this.city, (data) => {
      console.log(data);
      this.humidity = data.main.humidity;
      this.tempAvg = data.main.temp;
      this.tempAvg = Math.floor(this.tempAvg * (9/5) - 459.67);
      this.tempHigh = data.main.temp_max;
      this.tempHigh = Math.floor(this.tempHigh * (9/5) - 459.67);
      this.tempLow = data.main.temp_min;
      this.tempLow = Math.floor(this.tempLow * (9/5) - 459.67); 
      this.status = data.weather[0].description;
    });
   }

  ngOnInit() {
  }

}
