import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    formdata: Employee;
     list: Array<Employee>;
    rootUrl: string = 'http://41.38.125.17:4046/api/';
    //rootUrl: string = 'https://localhost:44396/api/'; 
    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        // return
        return this.http.get<any>(this.rootUrl + 'Employees');
            //.toPromise()
            //.then(data => { this.list = data['result'] as Array<Employee>; });

    }


    delete(Employees: Employee): Observable<Employee> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: Employees };
        return this.http.delete<Employee>((this.rootUrl + 'Employees/delete'), httpOptions);
    }
    create(Employees): Observable<any> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
        console.log(Employees);

        return this.http.post<Employee>((this.rootUrl + 'Employees'), Employees, httpOptions);
    }
    update(Employees: Employee): Observable<Employee> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        console.log(Employees);
        return this.http.put<Employee>((this.rootUrl + 'Employees'), Employees, httpOptions);
    }
    getCode(): Observable<string> {
        return this.http.get<string>(this.rootUrl + 'Employees/GetCode');
    }
    getByCode(code: string): Observable<Employee> {
        return this.http.get<Employee>(this.rootUrl + 'Employees/GetBycode/' + code);
    }
}
