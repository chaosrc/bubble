<template>
  <div class="bubble" :style="{top:top+'px',left:left+'px'}">
    <img src="../assets/img/blue.png" :style="{width:size+'px',height:size+'px'}"></img>
  </div>
</template>

<script>
export default {
  name:'bubble',
  props:["property",'width','height'],
  data(){
    return{
      
    }
  },
  computed:{
    top:{
      get:function(){
        return this.property.top;
      }
    },
    left(){
      return this.property.left;
    },
    size(){
      return this.property.size;
    }
  },
  methods:{
    move(x,y){
      this.$emit('moving',{id:this.property.id,mx:x,my:y});
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


