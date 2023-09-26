class Restangle{
    public width;
    public hegiht;

    constructor(width: number, height: number){
        this.width = width;
        this.hegiht = height;
    }
}

class RestangleInstans extends Restangle{
    constructor(width: number, height: number){
        super(width, height);
    }

    yuza(){
        return this.width * this.hegiht;
    }
}

const restangleInstans: RestangleInstans = new RestangleInstans(2, 3);
console.log(restangleInstans.yuza());