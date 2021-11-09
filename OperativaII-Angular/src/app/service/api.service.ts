import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl ='http://localhost:8080/bestRoute';
  constructor(private http: HttpClient) { }

   /*getEconomicPath(): Promise<any>{
    return this.http.get(this.apiUrl)
      .toPromise();
  }*/
  getPath(apiBody : Array<number>): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const observable = this.http.post(this.apiUrl, apiBody, httpOptions);


    observable.subscribe(
      response => {
    },
      error => {
        
    })

    return observable;
  }

}
