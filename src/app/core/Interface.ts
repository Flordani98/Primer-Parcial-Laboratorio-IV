export interface IProduct{
    id: string | null;
    description: string | null;
    price: string | null;
    stock: number | null;
}

export interface IUser{
    id: number | null;
    username: string | null;
    email: string | null;
    password: string | null;
}
