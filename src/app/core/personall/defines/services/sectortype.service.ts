import { Injectable } from '@angular/core';
import { Sectortype } from '../models/sectortype';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SectortypeService {

    rootUrl: string = 'http://localhost:4046/api/';
  // rootUrl:string = 'https://localhost:44396/api/';
   constructor(private http:HttpClient) { }
   
   getAll():Observable<Array<Sectortype[]>>{
     return this.http.get<Array<Sectortype[]>>(this.rootUrl+'SectorTypes');
     
   }
   delete(sectortypes:Sectortype):Observable<Sectortype>{
     const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'}),body : sectortypes};
     return this.http.delete<Sectortype>((this.rootUrl + 'SectorTypes/delete'), httpOptions);
   }
   create(sectortypes:Sectortype):Observable<Sectortype>{
     const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
     console.log(sectortypes);
     
     return this.http.post<Sectortype>((this.rootUrl + 'SectorTypes'),sectortypes ,httpOptions);
   }
   update(sectortypes:Sectortype):Observable<Sectortype>{
     const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
      console.log(sectortypes);
     return this.http.put<Sectortype>((this.rootUrl + 'SectorTypes'),sectortypes ,httpOptions);
   }
   getCode():Observable<string>{
     return this.http.get<string>(this.rootUrl+'SectorTypes/GetCode');
   }
   getByCode(code: string):Observable<Sectortype>{
     return this.http.get<Sectortype>(this.rootUrl+'SectorTypes/GetBycode/'+ code);
   }
}
