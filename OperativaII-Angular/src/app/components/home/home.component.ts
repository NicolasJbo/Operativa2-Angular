import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { Urls } from 'src/app/models/urls';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private apiService: ApiService) { 
  }

  citiesList :Array<City>=[{cityId: '0',name: 'Mar del Plata',show :false ,imrUrl: Urls.URL_BASE},
  {cityId: '1',name: 'Carlos Paz',show :false,imrUrl: Urls.URL_CARLOS_PAZ},
  {cityId: '2',name: 'Bariloche',show :false,imrUrl: Urls.URL_BARILOCHE},
  {cityId: '3',name: 'Mendoza',show :false,imrUrl: Urls.URL_MENDOZA},
  {cityId: '4',name: 'Usuahia',show :false,imrUrl: Urls.URL_USUAHIA},
  {cityId: '5',name: 'Salta',show :false,imrUrl: Urls.URL_SALTA},
  {cityId: '6',name: 'Jujuy',show :false,imrUrl: Urls.URL_JUJUY},
  {cityId: '7',name: 'Neuquen',show :false,imrUrl: Urls.URL_NEQUEN},
  {cityId: '8',name: 'San Luis',show :false,imrUrl: Urls.URL_SAN_LUIS},
  {cityId: '9',name: 'Rosario',show :false,imrUrl: Urls.URL_ROSARIO},
  {cityId: '10',name: 'San Juan',show :false,imrUrl: Urls.URL_SAN_JUAN}];

  ngOnInit(): void {
  }
  listAdd : Array<City>= [];
  apiBody =  Array<number>();
  bestRoute : Array<City>= [];
  totalKm;
  
  addCity(c :City){
  
    let contains = false;
    let cityID = c.cityId;

    this.listAdd.forEach(function (c) {
      if(cityID == c.cityId) contains = true;
    })

    if (contains)
      console.log("La ciudad ya existe");
    else {
      this.listAdd.push(c);
      console.log( this.listAdd);
      c.show=true;
    }
  }
  removeCity(city:City){
    this.listAdd.forEach((c, index) => {
      if (c.cityId === city.cityId)
        this.listAdd.splice(index, 1);
        c.show=false;
    });
  }

  calcular(){
 this.apiBody = new Array<number>();
    this.listAdd.forEach(c => {
     
      this.apiBody.push((Number)(c.cityId))
    });
    this.apiService.getPath(this.apiBody).subscribe(
      response => {    
       this.bestRoute =response['locations'];
       this.totalKm=response['totalDistance'];
    
      },
    error => {
      
    })

    
  }

}
