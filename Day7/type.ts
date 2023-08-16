class point2D {
    private number1: number;
    private number2: number;
    private d: number;
    

    
    constructor(number1, number2,d){
        this.number1 = number1
        this.number2 = number2
        this.d = d
    }
    public length(){
        return Math.sqrt((this.d *this.number1**2)+(this.number1**2 *this.d))
    }
    get_one(){
        return this.number1
    }
    get_two(){
        return this.number2
    }
    get_d(){
        return this.d
    }
  }
class point3D extends point2D{
    private number3: number;
    constructor(number1, number2,number3,d){
        super(number1,number2,d)
        this.number3 =number3

    }
    public override  length(){
        return Math.sqrt((super.get_d()* super.get_one()**2)+(super.get_d()* super.get_two()**2)+(this.number3**2 *super.get_d()))
    }

}