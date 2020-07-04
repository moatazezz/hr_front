export class Sectortype {
    code : string;
    nameAr : string;
    nameEn : string;
    remarks :string
    isActive : boolean;
    Remarks :string
    notes:string;
    flgDelete : boolean;
    deleteDate : Date;
    editdate : Date;
    addTime : Date;
    addBy : any;
    editBy : any;
    deleteBy : any;
    clear() {
      this.nameAr = '';
      this.nameAr = '';
    }
}
