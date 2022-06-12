export type Product={
    _id:string,
    name:string,
    price:number,
    img:string,
    sale_price:number,
    desc:string
}
export type ProductCreate={
    name:string,
    price:number,
    img:string,
    sale_price:number,
    desc:string
}