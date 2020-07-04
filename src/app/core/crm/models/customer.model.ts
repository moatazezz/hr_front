import { Salesperson } from './salesperson.model';

export class Customer {
    id: string;
    code: string;
    name: string;
    email: string;
    phone: string;
    mobile: string;
    street: string;
    street2: string;
    city: string;
    country: string;
    salesPersonId: string;
    salesPerson: Salesperson;
    internalnotes: InternalNote[];
    contactPerson: ContactPerson[];
    addBy: string;
    addTime: string;
    aditBy: string;
    editdate: string;
    deleteBy: string;
    deleteDate:string
    flgDelete: boolean;
}
export class InternalNote{
    id: string;
    customerid: string;
    description: string;
    addBy: string;
    addTime: string;
    editBy: string;
    editdate: string;
    deleteBy: string;
    deleteDate: string;
    flgDelete: string;

}
export class ContactPerson {
    id: string;
    customerid: string;
    name: string;
    title: string;
    jobPosition: string;
    notes: string;
    email: string;
    phone: string;
    mobile: string;
	addBy: string;
	addTime: string;
	editBy: string;
	editdate: string;
	deleteBy: string;
	deleteDate: string;
	flgDelete: string;
}
