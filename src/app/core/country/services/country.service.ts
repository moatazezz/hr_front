import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Countries } from '../models/countries';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  rootUrl:string = 'http://192.168.1.220:444/api/';
  constructor(private http:HttpClient) { }
  
  getAllCountries():Observable<Array<Countries[]>>{
    return this.http.get<Array<Countries[]>>(this.rootUrl+'countries');
  }
  deleteCountry(countries:Countries):Observable<Countries>{
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'}),body : countries};
    return this.http.delete<Countries>((this.rootUrl + 'countries/delete'), httpOptions);
  }
  insertCountry(countries:Countries):Observable<Countries>{
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    console.log(countries);
    
    return this.http.post<Countries>((this.rootUrl + 'countries'),countries ,httpOptions);
  }
  upCountry(countries:Countries):Observable<Countries>{
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
     console.log(countries);
    return this.http.put<Countries>((this.rootUrl + 'countries'),countries ,httpOptions);
  }
  getCode():Observable<string>{
    return this.http.get<string>(this.rootUrl+'countries/GetCode');
  }
  getCountryByCode(code: string):Observable<Countries>{
    return this.http.get<Countries>(this.rootUrl+'countries/GetBycode/'+ code);
  }
}
