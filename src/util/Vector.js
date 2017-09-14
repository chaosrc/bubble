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

  dot(vector){
    if(!vector instanceof Vector) return;
    return this.x*vector.x + this.y*vector.y;
  }

  normalize(){
    let s = 1/this.length;
    this.x *= s;
    this.y *= s;
    return this;
  }
}

export default Vector;