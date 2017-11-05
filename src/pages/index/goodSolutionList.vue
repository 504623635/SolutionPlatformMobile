<template>
  <div>
    我是good页面
     <divider>good</divider>

      <grid :cols="4" >
      <grid-item v-for="i in 6" :key="i"  >
        <span class="grid-center">{{i}}</span>
      </grid-item>
    </grid>
  </div>
  
</template>

<script>
import { Divider,Search, Group,Grid,GridItem } from 'vux'

export default {
  components: {
    Divider,
    Search,
    Group,
    Grid,
    GridItem
   
  },
  methods: {
   
  },
  data () {
    return {
      results: [],
      value: '',
      moduleList:[],
      imageTest:"xsgl.png"
    }
  },
  created(){
   
  }
}

</script>
<style scoped>


</style>

