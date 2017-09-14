<template>
  <div id="bubble-container">

    <bluebubble v-for="(bubble,index) in blueBubbles"
     :key="index" :property="bubble" 
     :width="width" :height="height"></bluebubble>

    <redbubble :property="redBubble"
     key="red" @moving="bubbleMove" 
     :width="width" :height="height"></redbubble>
     
  </div>
</template>


<script>
import BlueBubble from './BlueBubble'
import RedBubble from './RedBubble'

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
        size:this.randomInt(20,50)
      }
    },
    randomInt(start,end){
      let r = Math.random()
      return parseInt(start+r * (end - start))
    },
    bubbleMove(options){
      if(options.id === 'red'){
        this.redBubble.top += options.my;
        this.redBubble.left += options.mx;
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


