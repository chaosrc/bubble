<template>
  <div id="bubble-container">

    <bluebubble v-for="(bubble,index) in blueBubbles"
     :key="index" :property="bubble" 
     :vector="bubble.vector" @moving="bubbleMove" 
     :width="width" :height="height"></bluebubble>

    <redbubble :property="redBubble"
     key="red" @moving="bubbleMove" 
     :width="width" :height="height"></redbubble>

  </div>
</template>


<script>
import BlueBubble from './BlueBubble'
import RedBubble from './RedBubble'
import Vector from '../util/Vector'

export default {
  name:'bubble-container',
  created(){
    for(let i=0;i<30;i++){
      let blue = this.getRandomBubble();
      blue.id = i;
      this.blueBubbles.push(blue);
    }
    this.redBubble={
      top:(this.height-50)/2,
      left:(this.width-50)/2,
      size:50,
      id:'red'
    }
  },
  data(){
    return {
      blueBubbles:[],
      redBubble:{},
      width:600,
      height:300
    }
  },
  methods:{
    getRandomBubble(){
      return {
        top: this.randomInt(0,this.height),
        left: this.randomInt(0,this.width),
        size:this.randomInt(20,50),
        vector:''
      }
    },
    randomInt(start,end){
      let r = Math.random()
      return parseInt(start+r * (end - start))
    },
    bubbleMove(options){
      //检查是否有碰撞
      let col = this.hasCollision(options);
      //如果有，执行碰撞
      if(col){
        this.resovleCollision(options,col);
      } 


      //更新气泡位置
      let target;
      if(options.id === 'red'){
        target = this.redBubble;
      }else{
        target = this.blueBubbles[options.id]
      }
      this.updatePosition(target,options.mx,options.my);
      
    },
    updatePosition(target,mx,my){
      let top = target.top + my;
      let left = target.left + mx;
      //如果目标位置超出边界，移动到对面
      if(top<0&&-top>target.size){
        top = this.height;
      }
      if(left<0&&-left>target.size){
        left = this.width;
      }
      if(top>this.height){
        top = -target.size
      }
      if(left>this.width){
        left = -target.size
      }
      
      target.top = top;
      target.left = left;

      
      if(target.vector){
        //更新target的移动速率，并使其递减
        target.vector = new Vector(target.vector.x*0.9,target.vector.y*0.9);
      }
    },
    hasCollision(options){
      let moveBubble = options.id === 'red' ? this.redBubble : this.blueBubbles[options.id];
      //计算移动气泡的圆心
      let mCenterY = moveBubble.top+options.my+moveBubble.size/2;
      let mCenterX = moveBubble.left+options.mx+moveBubble.size/2;

      for(let i=0;i<this.blueBubbles.length;i++) {
        let bubble = this.blueBubbles[i];

        //防止与自己碰撞
        if(bubble.id === options.id) continue;
        //计算气泡圆心
        let cy = bubble.top+bubble.size/2;
        let cx = bubble.left+bubble.size/2

        if(Math.pow((mCenterY-cy),2)+
           Math.pow((mCenterX-cx),2) 
           < Math.pow((bubble.size+moveBubble.size)/2,2)
           ){
             return bubble;
           }
      }

    },
    resovleCollision(options,bubble){
      if(options.id === 'red'){
        let redius = this.redBubble.size/bubble.size;
        bubble.vector = new Vector(options.mx*redius*5, options.my*redius*5);
      }
    }
  },
  components:{
    bluebubble: BlueBubble,
    redbubble: RedBubble
  }

}
</script>

<style scoped>
  #bubble-container{
    position: relative;
    width:600px;
    height:300px;
    border:2px gray solid;
    overflow: hidden;
  }
</style>


