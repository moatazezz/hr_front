import { BaseModel } from '../../_base/crud';
export class Sectormodal extends BaseModel {
	id: number;
	Code: string;
	nameAr: string;
	nameEn: string;
	description: string;
	
	clear() {
		this.Code='';
		this.nameAr = '';
		this.nameAr = '';
		this.description = '';	
	}
}

