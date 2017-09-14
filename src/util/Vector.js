class Vector{
  constructor(x,y){
    if(arguments.length === 1 && typeof arguments[0] === 'object'){
      x = arguments[0].x;
      y = arguments[0].y;
    }

    this.x = x;
    this.y = y;
  }

  get length(){
    return Math.sqrt(this.x*this.x + this.y*this.y)
  }
  //向量的点乘
  dot(vector){
    if(!vector instanceof Vector) return;
    return this.x*vector.x + this.y*vector.y;
  }

  normalize(){
    let s = 1/this.length;
    return new Vector(this.x*s,this.y*s);
  }
  //乘以数字
  multiply(number){
    return new Vector(this.x*number,this.y*number);
  }
  //向量相减
  subtract(vec){
    return new Vector(this.x-vec.x,this.y-vec.y);
  }
  //向量相加
  add(vec){
    return new Vector(this.x+vec.x, this.y+vec.y);
  }
}

export default Vector;