<template>
  <div>
    我是question页面
     <divider>question</divider>
  </div>
  
</template>

<script>
import { Divider,Search, Group, Cell,Swiper,SwiperItem,Flexbox, FlexboxItem,XImg ,Tab, TabItem } from 'vux'

export default {
  components: {
    Divider,
    Search,
    Group,
    Cell,
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem,
    XImg ,
    Tab,
    TabItem
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

