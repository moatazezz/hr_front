import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CustomerService } from '../../../../../core/crm/services/customer.service';
import { ContactPerson } from '../../../../../core/crm/models/customer.model';
import { SalespersonService } from '../../../../../core/crm/services/salesperson.service';

@Component({
  selector: 'kt-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
    customerlist;
    cust;
    contact;
    salespersons;
    isLoading;
    submitted = false;
    constructor(private fb: FormBuilder,
        private _cdr: ChangeDetectorRef,
        private service: CustomerService,
        private salesservice: SalespersonService) { }
    refresh() {
        this.isLoading = true;
        console.log("true ", this.isLoading);
        this.service.getAll()
            .subscribe(
                data => {
                    this.isLoading = false;
                    this.customerlist.controls['custDetail'].clear();

                    for (let item of data["result"]) {

                        this.customerlist.controls['custDetail'].push(this.fb.group({
                            id: item.id,
                            name: item.name,
                            email: item.email,
                            mobile: item.mobile,
                            phone: item.phone

                        }));
                        console.log("item.namear", item.id);

                    }
                    this._cdr.detectChanges();
                    console.log(this.isLoading);
                    console.log(this.customerlist); 
                });
    }
    refreshsales() {
        this.salesservice.getAll()
            .subscribe(
                data => {

                    this.salespersons.clear() ;
                    
                    for (let item of data["result"]) {

                        this.salespersons.push(this.fb.group({
                            Id: item.id,
                            Name: item.name


                        }));
                        console.log("salesid", item.id)
                    }
                    this._cdr.detectChanges()
                    console.log("sales", this.salespersons);
                });

    }
    errorHandling(control: string, error: string) {
        return this.cust.controls[control].hasError(error);
        //if (this.emp != undefined)
        //return this.emp.controls;
    }
    errorHandlingcontact(control: string, error: string) {
        return this.contact.controls[control].hasError(error);
        //if (this.emp != undefined)
        //return this.emp.controls;
    }
    edit(id) {
        // alert('ok');

        this.service.getById(id)
            .subscribe(
                data => {
                    this.cust = this.fb.group({
                        id: data.id,
                        code: data.code,
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        mobile: data.mobile,
                        country: data.country,
                        city: data.city,
                        street: data.street,
						street2:data.street2,
                        contactPerson: this.fb.array([]),
						salesPersonId: data.salesPersonId
						 
                    })
                    for (let contact of data.contactPerson) {
                        this.cust.controls['contactPerson'].push(this.fb.group({
                            id: contact.id,
                            name: contact.name,
                            email: contact.email,
                            mobile: contact.mobile,
                            jobPosition: contact.jobPosition,
                            title: contact.title,
                            notes: contact.notes
                        }));
                        console.log("contact ", contact.jobPosition);
                    }
                    console.log("cust ", this.cust);
                    this._cdr.detectChanges();
                });
        
                    
                        //console.log("conatact", contact.name,)
                    //}
                    
                    
                

    }
    editcontact(contact, i: string, AddUpdateflg) {
        console.log("flag ", AddUpdateflg);
        if (AddUpdateflg ==true) {
            this.contact.patchValue({
                index: 'new',
                id: '0',
                name: '',
                email: '',
                mobile: '',
                jobPosition: '',
                title: '',
                notes: ''

            })
        }
        else {
            this.contact.patchValue({
                index: i,
                id: contact.id,
                name: contact.name,
                email: contact.email,
                mobile: contact.mobile,
                jobPosition: contact.jobPosition,
                title: contact.title,
                notes: contact.notes

            })

        }
        console.log("contact ", this.contact.value);
        this._cdr.detectChanges();
    }
    updatecontact() {
        console.log("index ", this.contact.value.index);
        console.log("contact indexed ", this.cust.controls['contactPerson'].at(this.contact.value.index));
        if (this.contact.value.index != 'new') {
            this.cust.controls['contactPerson'].at(this.contact.value.index).patchValue({
                id: this.contact.value.id,
                name: this.contact.value.name,
                email: this.contact.value.email,
                mobile: this.contact.value.mobile,
                jobPosition: this.contact.value.jobPosition,
                title: this.contact.value.title,
                notes: this.contact.value.notes
            });
            console.log("patch")
        }
        else {
            this.cust.controls['contactPerson'].push(this.fb.group({
                id: this.contact.value.id,
                name: this.contact.value.name,
                email: this.contact.value.email,
                mobile: this.contact.value.mobile,
                jobPosition: this.contact.value.jobPosition,
                title: this.contact.value.title,
                notes: this.contact.value.notes
            }));
           
            console.log("push")
        }
        this._cdr.detectChanges();
    }
    delete(contact,i) {
        if (this.cust.value.id == '' || this.cust.value.id == null) {
            this.cust.controls['contactPerson'].removeAt(i);
        }
        else {
            this.cust.controls['contactPerson'].at(i).value.flgDelete = true;
            this.cust.controls['contactPerson'].at(i).value.hide = true;
        }
    }
    deletecust(id) {
        this.service.getById(id)
            .subscribe(data => {
                let cust = data;
                console.log(cust);
                this.service.delete(cust)
                    .subscribe(data => {
                        this.refresh();
                        console.log('deleted');
                    });
            })
    }
    ngOnInit() {
        this.customerlist = this.fb.group({
            custDetail: this.fb.array([])
        });
        this.cust = this.fb.group({
            contactPerson: this.fb.array([
                this.fb.group({
                    id: [''],
                    name: [''],
                    email: [''],
                    mobile: [''],
                    jobPosition: [''],
                    title: [''],
                    notes: [''],
                    hide: [''],
					flgDelete:[']']
                })]),
            id: [''],
            code: ['', Validators.required],
            name: ['', Validators.required],
            phone: [''],
            email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
            mobile: [''],
            country: [''],
            city: [''],
            street: [''],
            street2: [''],
            salesPersonId: ['', Validators.required]

        });
        this.contact = this.fb.group({
            index: [''],
            id: [''],
            name: [''],
            email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
            mobile: [''],
            jobPosition: [''],
            title: [''],
            notes: [''],
			flgDelete:['']
        });
        this.salespersons = this.fb.array([this.fb.group({
            Id: [''],
            Name: ['']
        })
        ]);
        this.refresh();
        this.refreshsales();
            this.clear(); 
    }
    save() {
        if (this.cust.value.id == '' || this.cust.value.id == null) {
            let contactPerson = this.fb.array([
                this.fb.group({
                id: '',
                name: '',
                email:'' ,
                mobile: '',
                jobPosition: '',
                title: '',
                notes: ''
                })]);
            contactPerson.clear();
            for (let contact of this.cust.controls['contactPerson'].controls) {
                contactPerson.push(this.fb.group({
                    id: contact.value.id,
                    name: contact.value.name,
                    email: contact.value.email,
                    mobile: contact.value.mobile,
                    jobPosition: contact.value.jobPosition,
                    title: contact.value.title,
                    notes: contact.value.notes,
                    flgDelete: contact.value.flgDelete
                }));
                console.log("contact.value.name", contactPerson)
            }
            let customer = {
                name: this.cust.value.name,
                phone: this.cust.value.phone,
                email: this.cust.value.email,
                mobile: this.cust.value.mobile,
                code: this.cust.value.code,
                
                country: this.cust.value.country,
                city: this.cust.value.city,
                street: this.cust.value.street,
                street2: this.cust.value.street2,
                salesPersonId: this.cust.value.salesPersonId,
				contactPerson: contactPerson.value
            }
            this.service.create(customer)
                .subscribe(data => {
                    //if (data['errors'] != undefined)
                    //    alert(data['errors']['message']);
                        this.refresh();
                        this.clear();
                    
					 
                }
                    , error => {
                        console.log(error['error']['errors'][0]['message']);
                        if (error['error']['errors'][0]['message']=='Duplicate_Key')
                        alert("Code already exist");
                    }
                );
        }
        else {
            this.service.update(this.cust.value)
                .subscribe(data => {
                    this.refresh();
                    this.clear();
                }
                    , error => { alert('error') }
                );
        }

    }
    clear() {
        this.cust.reset();
        this.cust.controls['contactPerson'].clear();

    }

}
