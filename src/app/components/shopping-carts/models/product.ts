export class Product {
    id!:number;
    name!:string;
    description!:string;
    price!:number;
    model!:string;
    imgCar!:string;

    constructor(id:number, name:string, description:string = ' ', price:number = 0, model:string = 'Unkonwn', imgCar:string = './src/assets/404.jpg'){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.model = model
        this.imgCar = imgCar
    }
}
