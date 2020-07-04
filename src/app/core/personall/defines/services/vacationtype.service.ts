import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {vacationtype} from "../models/vacationtype"
@Injectable({
  providedIn: 'root'
})
export class VacationtypeService {

    rootUrl: string = 'http://localhost:4046/api/';
 // rootUrl:string = 'https://localhost:44396/api/';
  constructor(private http:HttpClient) { }
  
  getAll():Observable<Array<vacationtype[]>>{
    return this.http.get<Array<vacationtype[]>>(this.rootUrl+'VacationTypes');
    
  }
  delete(vacationtypes:vacationtype):Observable<vacationtype>{
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'}),body : vacationtypes};
    return this.http.delete<vacationtype>((this.rootUrl + 'VacationTypes/delete'), httpOptions);
  }
  create(vacationtypes:vacationtype):Observable<vacationtype>{
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    console.log(vacationtypes);
    
    return this.http.post<vacationtype>((this.rootUrl + 'VacationTypes'),vacationtypes ,httpOptions);
  }
  update(vacationtypes:vacationtype):Observable<vacationtype>{
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
     console.log(vacationtypes);
    return this.http.put<vacationtype>((this.rootUrl + 'VacationTypes'),vacationtypes ,httpOptions);
  }
  getCode():Observable<string>{
    return this.http.get<string>(this.rootUrl+'VacationTypes/GetCode');
  }
  getByCode(code: string):Observable<vacationtype>{
    return this.http.get<vacationtype>(this.rootUrl+'VacationTypes/GetBycode/'+ code);
  }
}
