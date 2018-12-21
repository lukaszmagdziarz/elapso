export class Leaf {

    name : string
    description : string
    price : number
    isSelected : boolean

    leafs : Leaf[]

    constructor(name : string, description : string, price : number, leafs : Leaf []){
        this.name = name
        this.description = description
        this.price = price
        this.leafs = leafs

        this.isSelected = false;
    }
}