<template>

  <div class="bubble red-bubble" :style="{top:top+'px',left:left+'px'}">
    <img src="../assets/img/red.png" 
         :style="{width:size+'px',height:size+'px'}" 
         @mousedown.prevent="onMouseDown" 
         @mouseup="onMouseUp"
         @mousemove.prevent="onMove"
         @mouseout="onMouseUp"></img>
  </div>
  
</template>

<script>
import Bubble from './Bubble'
import Vue from 'vue'
export default Vue.extend({
  mixins:[Bubble],
  data(){
    return {
      mouseDown:false,
      mouseCoord:{}
    }
  },
  mounted(){
    console.log(this.top,this.left)
  },
  methods:{
    onMouseDown(e){
      this.mouseDown = true;

      this.mouseCoord.x = e.clientX;
      this.mouseCoord.y = e.clientY;
    },
    onMove(e){
      if(!this.mouseDown) return;
      let pre = this.mouseCoord;
      let moveX = e.clientX - pre.x;
      let moveY = e.clientY - pre.y;
      let targetX = this.left + moveX;
      let targetY = this.top + moveY;
     
      //如果气泡到达区域边界，停止移动
      if(targetX<0||
         targetY<0||
         targetX+this.size>this.width||
         targetY+this.size>this.height){
        return;
      }

      this.move(moveX,moveY);

      this.mouseCoord.x = e.clientX;
      this.mouseCoord.y = e.clientY;
      
    },
    onMouseUp(){
      this.mouseDown = false;
    }
  }

});
</script>
<style scoped>
  .bubble{
    position: absolute;
  }
  .red-bubble:hover{
    cursor: move;
    cursor:-webkit-grab;
  }
  .red-bubble:active{
    cursor:-webkit-grabbing;
  }
</style>
