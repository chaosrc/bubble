<template>
  <div class="bubble" :style="{top:top+'px',left:left+'px'}">
    <img src="../assets/img/blue.png" :style="{width:size+'px',height:size+'px'}"></img>
  </div>
</template>

<script>
export default {
  name:'bubble',
  props:['width','height'],
  data(){
    return{
      srcPath:'../assets/img/blue.png',
      top: 0,
      left: 0,
      size: 10
    }
  },
  created(){
    this.top = this.randomInt(0,this.height);
    this.left = this.randomInt(0,this.width);
    this.size =this.randomInt(20,50);
  },
  methods:{
    randomInt(start,end){
      let r = Math.random()
      return parseInt(start+r * (end - start))
    },
    move(top,left){
      this.top = top;
      this.left = left;
    }

  }
}
</script>

<style scoped>
  .bubble{
    position: absolute;
  }
  img{
    user-select: none;
  }
</style>


