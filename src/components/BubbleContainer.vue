<template>
  <div id="bubble-container">
    <bluebubble v-for="" :width="600" :height="300"></bluebubble>
  </div>
</template>


<script>
import BlueBubble from './BlueBubble'

export default {
  name:'bubble-container',
  data(){
    return {

    }
  },
  components:{
    bluebubble: BlueBubble
  }

}
</script>

<style scoped>
  #bubble-container{
    position: relative;
    width:600px;
    height:300px;
    border:2px gray solid;
  }
</style>


