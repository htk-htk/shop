export class GoodsMessage {
    constructor(src,description,price,count,size,color,max=200,) {
        this.src=src
        this.description=description
        this.price=price
        this.count=count
        this.max=max
        this.size=size
        this.color=color
    }
    addCount(count){
        this.count+=count
        if(this.count>this.max) this.count=this.max
    }
    reduceCount(){
        this.count--
        if(this.count<1) this.count=1
    }
}
