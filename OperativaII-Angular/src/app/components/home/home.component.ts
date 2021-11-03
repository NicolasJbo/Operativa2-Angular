import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  citiesList :Array<City>=[{cityId: '0',name: 'Mar del Plata',show :false },
  {cityId: '1',name: 'Carlos Paz',show :false},{cityId: '2',name: 'Bariloche',show :false},{cityId: '2',name: 'Esta ciudad esta mal! (noc cual es)',show :false},
  {cityId: '4',name: 'Usuahia',show :false},{cityId: '5',name: 'Salta',show :false},{cityId: '6',name: 'Jujuy',show :false},
  {cityId: '7',name: 'Neuquen',show :false},{cityId: '8',name: 'San Luis',show :false},{cityId: '9',name: 'Rosario',show :false},{cityId: '10',name: 'San Juan',show :false}];

  ngOnInit(): void {
  }
  listAdd : Array<City>= [];
  
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

}
