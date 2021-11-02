import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  citiesList :Array<City>=[{cityId: '0',name: 'Mar del Plata'},
  {cityId: '1',name: 'Carlos Paz'},{cityId: '2',name: 'Bariloche'},{cityId: '2',name: 'Carlos'},
  {cityId: '4',name: 'Usuahia'},{cityId: '5',name: 'Salta'},{cityId: '6',name: 'Jujuy'},
  {cityId: '7',name: 'Neuquen'},{cityId: '8',name: 'San Luis'},{cityId: '9',name: 'Rosario'},{cityId: '10',name: 'San Juan'}];

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
    }
  }
  removeCity(city:City){
    this.listAdd.forEach((c, index) => {
      if (c.cityId === city.cityId)
        this.listAdd.splice(index, 1);
    });
  }

}
