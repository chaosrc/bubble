<template>
  <div id="bubble-container">
    <bluebubble v-for="n in 30" :width="600" :height="300" :key="n"></bluebubble>
    <redbubble :width="600" :height="300" key="red"></redbubble>
  </div>
</template>


<script>
import BlueBubble from './BlueBubble'
import RedBubble from './RedBubble'

export default {
  name:'bubble-container',
  data(){
    return {

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


