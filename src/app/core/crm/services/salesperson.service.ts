import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Employee } from '../../personall/defines/models/employee.model';
import { Salesperson } from '../models/salesperson.model';

@Injectable({
  providedIn: 'root'
})
export class SalespersonService {
 //formdata: salesperson;
 //    list: Array<Employee>;
    rootUrl: string = 'http://41.38.125.17:4046/api/';
    //rootUrl: string = 'http://localhost:4046/api/'; 
    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        // return
        return this.http.get<any>(this.rootUrl + 'salesperson');
            //.toPromise()
            //.then(data => { this.list = data['result'] as Array<Employee>; });

    }


    delete(Employees: Salesperson): Observable<Salesperson> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: Employees };
        return this.http.delete<Salesperson>((this.rootUrl + 'salesperson/delete'), httpOptions);
    }
    create(Salesperson): Observable<any> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
        console.log(Salesperson);

        return this.http.post<Salesperson>((this.rootUrl + 'salesperson'), Salesperson, httpOptions);
    }
    update(Salesperson: Salesperson): Observable<Salesperson> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        console.log(Salesperson);
        return this.http.put<Salesperson>((this.rootUrl + 'salesperson'), Salesperson, httpOptions);
    }
    //getCode(): Observable<string> {
    //    return this.http.get<string>(this.rootUrl + 'Employees/GetCode');
    //}
    getById(id: string): Observable<Salesperson> {
        return this.http.get<Salesperson>(this.rootUrl + 'salesperson/' + id);
    }
}
