import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl ='http://localhost:8080/bestRoute';
  constructor(private http: HttpClient) { }

   getEconomicPath(): Promise<any>{
    return this.http.get(this.apiUrl)
      .toPromise();
  }

}
