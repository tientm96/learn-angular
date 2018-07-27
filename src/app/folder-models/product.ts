export class Product {
    public id : number;
    public name : string;
    public price : number;
    public status : boolean;

    constructor(id: number, name : string, price : number, status : boolean){
        this.id = id;
        this.name =  name;
        this.price = price;
        this.status = status;
    }
}
