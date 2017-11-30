<template>
  <div>
     <group gutter="0">
      <cell-box v-for="i in 10" :key="i" :border-intent=true :is-link=false >
        <router-link :to="{path: '/login'}" class="list-item">
          <div tag="div" class="cell-icon"></div>
          <div tag="div" class="cell-content">
              <div tag="div" class="cell-title">555555555555555555</div>
          </div>
        </router-link>
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
.list-item {
width:100%;

}
.list-item .cell-icon {
  width: 20%;
  height:64px;
  background-color: #eee;
  float:left;
}
.list-item .cell-content{
  text-align:left;
  width:80%;
  float:left;
}

.list-item .cell-content .cell-title{
  font-size:14px;
  color:black;

}


</style>

