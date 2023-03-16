import { Item } from "./item";

export class Clothes extends Item {
    sizes:string[];
    colors:string[];
    static id:number=0;
    constructor(_name:string,_description:string,_price:number,_quantity:number,_producer:string,_featured:boolean,_sizes:string[],_image:string,_colors:string[]){
        super(Clothes.id,_name,_description,_price,_quantity,_producer,_featured,_image);
        this.sizes=_sizes;
        this.colors=_colors;
        Clothes.id++;
    }
}
