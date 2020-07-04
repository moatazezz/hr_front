import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup   } from '@angular/forms';
import { SalespersonService } from '../../../../../core/crm/services/salesperson.service';

@Component({
  selector: 'kt-salesperson',
  templateUrl: './salesperson.component.html',
    styleUrls: ['./salesperson.component.scss'],
    
})
export class SalespersonComponent implements OnInit {

    emplist;
    emp: FormGroup;  
    isLoading;
    submitted = false;
    constructor(
        private fb: FormBuilder,
        private _cdr: ChangeDetectorRef,
        private service: SalespersonService) { }

    refresh() {
        this.isLoading = true;
        console.log("true ", this.isLoading);
        this.service.getAll()
            .subscribe(
                data => {
                    this.isLoading = false;
                    this.emplist.controls['empDetail'].clear();

                    for (let item of data["result"]) {

                        this.emplist.controls['empDetail'].push(this.fb.group({
                            Id: item.id,
                            Name: item.name,
                            Email: item.email,
                            Mobil: item.mobil,
							Phone:item.phone

                        }));
                        console.log("item.namear", item.name);

                    }
                    this._cdr.detectChanges();
                    console.log(this.isLoading);
                    //console.log(this.emplist); 
                });
    }
    ngOnInit() {

        this.emplist = this.fb.group({
            empDetail: this.fb.array([])
        });
        this.emp = this.fb.group({
            Id: [''],
            Name: ['', Validators.required],
            Phone: [''],
            Email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
            Mobil: ['']
        });
        this.refresh();
        this.clear(); 

    }
    errorHandling(control:string,error:string) {
     return   this.emp.controls[control].hasError(error);
        //if (this.emp != undefined)
        //return this.emp.controls;
    }
    edit(id) {
        // alert('ok');
		
        this.service.getById(id)
            .subscribe(
                data => {
                    this.emp = this.fb.group({
                        Id: data.id,
                        Name: data.name,
                        Email: data.email,
                        Phone: data.phone,
                        Mobil: data.mobil
                    })
                    console.log("emp ", data.id);
                    this._cdr.detectChanges();
                });

    }
    save() {
        this.submitted = true;
        if (this.emp.invalid) {
            return;
        }

        console.log("form status", this.emp.status)
        
            if (this.emp.value.Id == '' || this.emp.value.Id == null) {
                let employee = {
                    Name: this.emp.value.Name,
                    Phone: this.emp.value.Phone,
                    Email: this.emp.value.Email,
                    Mobil: this.emp.value.Mobil
                }
                this.service.create(employee)
                    .subscribe(data => {
                        this.refresh();
                        this.clear();
                    }
                        , error => { alert('error') }
                    );
            }
            else {
                this.service.update(this.emp.value)
                    .subscribe(data => {
                        this.refresh();
                        this.clear();
                    }
                        , error => { alert('error') }
                    );
            }
        
    }
    clear() {
        this.emp.reset();


    }
    delete(salesperson) {
        console.log(salesperson);
        this.service.delete(salesperson)
            .subscribe(data => {
                this.refresh();
                console.log('deleted');
            });
    
    }

}
