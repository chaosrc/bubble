import Vue from 'vue'
import Bubble from './Bubble'

export default Vue.extend({
  mixins: [Bubble],
  props:['vector'],
  data(){
    return{
      
    }
  },
  watch:{
    vector(pre){
      if(this.vector&&this.vector.length>0.2) {
        requestAnimationFrame(()=> this.move(this.vector.x,this.vector.y));
        // console.log(this.property.id,this.vector.x,this.vector.y)
        
      };
    }
  }

})
