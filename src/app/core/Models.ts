import { IProduct, IUser } from "./Interface";

export class User implements IUser{
    public id: number | null;
    username: string | null;
    email: string | null;
    password: string | null;

    constructor( user? : any){
        this.id = user.id != null ? user.id : null;
        this.username = user.username != null ? user.username : null;
        this.email = user.email != null ? user.email : null;
        this.password = user.password != null ? user.password : null;
    }
   
}
export class Product implements IProduct{
    id: string | null;
    description: string | null;
    price: string | null;
    stock: number | null;

    constructor( product? : any){
        this.id = product.id != null ? product.id : null;
        this.description = product.description != null ? product.description : null;
        this.price = product.price != null ? product.price : null;
        this.stock = product.stock != null ? product.stock : null;
    }
   
}

