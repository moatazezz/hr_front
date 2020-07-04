import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    rootUrl: string = 'http://41.38.125.17:4046/api/';
    //rootUrl: string = 'http://localhost:4046/api/'; 
    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        // return
        return this.http.get<any>(this.rootUrl + 'customer');
        //.toPromise()
        //.then(data => { this.list = data['result'] as Array<Employee>; });

    }


    delete(customer: Customer): Observable<Customer> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: customer };
        return this.http.delete<Customer>((this.rootUrl + 'customer/delete'), httpOptions);
    }
    create(customer): Observable<any> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
        console.log(customer);

        return this.http.post<Customer>((this.rootUrl + 'customer'), customer, httpOptions);
    }
    update(customer: Customer): Observable<Customer> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        console.log(customer);
        return this.http.put<Customer>((this.rootUrl + 'customer'), customer, httpOptions);
    }
    //getCode(): Observable<string> {
    //    return this.http.get<string>(this.rootUrl + 'Employees/GetCode');
    //}
    getById(id: string): Observable<Customer> {
        return this.http.get<Customer>(this.rootUrl + 'customer/' + id);
    }
}
