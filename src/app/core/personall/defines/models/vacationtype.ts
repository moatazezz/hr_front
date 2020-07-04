export class vacationtype {
    code : string;
    remarks : string;
    isActive : boolean;
    nameAr : string;
    nameEn : string;
    
      Remarks :string
      Abbreviation :string 

      Hasbalance : boolean
      AnnualBalance  : number

      IsDeductedfromSalary : boolean
      DaysDeductedfromSalary : number

      BalanceTransferAllowed : boolean

      IsPayed : boolean

      DisplayBalanceRequired : boolean

      AttachmentRequired : boolean

      WebrequestNotAllowed : boolean
      DeductedfromAnnualBalance : boolean 

      MaximuimAnnualBalanceDeduction  : number

      MaximiumTimesAllowed  : number
    //public bool IsOnce 
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
    //  this.description = '';	
    }
    
  }