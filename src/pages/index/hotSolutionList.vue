<template>
  <div>
     <group gutter="0">
      <cell-box v-for="i in 10" :key="i" :border-intent=true :is-link=false >
        <div @click="goLogn">
          <div class="cell-icon"></div>
        </div>
       </cell-box>
    </group>
    <divider>hot</divider>
  </div>
  
</template>

<script>
import { Divider, Group, CellBox,Swiper,SwiperItem,Flexbox, FlexboxItem,XImg ,Tab, TabItem } from 'vux'

export default {
  components: {
    Divider,
    Group,
    CellBox,
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem,
    XImg ,
    Tab,
    TabItem
  },
  methods: {
   goLogn(){
     this.$router.push('/login')
   }
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
.cell-icon {
  height: 64px;
  width: 64px;
  margin-right: 13px;
  background-color: #eee;
}


</style>

