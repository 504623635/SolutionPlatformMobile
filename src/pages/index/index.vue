<template>
  <div class="search">
    <search @on-result-click="resultClick"
            @on-change="getResult"
            @on-submit="showResult"
            :results="results"
            v-model="value"
            :auto-fixed="false"
            @on-focus="onFocus"
            @on-cancel="onCancel">
    </search>

    <swiper  dots-position="center"  dots-class="dots-style">
      <swiper-item  v-for="i in 4" :key="i" class="black"  >
        <router-link tag="div" v-for="item in moduleList" :key="moduleList.id"  :to="{path: '/login'}"  class="flex-demo">
            <div><img :src="item.imgSrc" class="moduleImg-style"></img></div>
            <div><span>{{item.moudleName}}</span></div>
        </router-link>
      </swiper-item>
    </swiper>
  <div class="tab-content">
    <tab :line-width="2" active-color="#288AF0">
        <tab-item @click.native="goHot" selected >热门方案</tab-item>
        <tab-item @click.native="goGood" >经典方案</tab-item>
        <tab-item @click.native="goQus" >提问</tab-item>
      </tab>
  <router-view  keep-alive></router-view>
  </div>
    
  </div>
</template>

<script>
import { Search, Group, Cell,Swiper,SwiperItem,Flexbox, FlexboxItem,XImg ,Tab, TabItem } from 'vux'

import moduleApi from '../../api/moduleApi'
export default {
  components: {
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
    resultClick (item) {
      window.alert('你点击了结果: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    },
    showResult () {
      alert(this.value)
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    },
    goHot(){
      this.$router.push('/hotSolutionList')
    },
    goGood(){
      this.$router.push('/goodSolutionList')
    },
    goQus(){
      this.$router.push('/question')
    },
    GoToModule(item){
      return {path: '/login'}
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
    let data = {}
    moduleApi.GetModuleList(data)
        .then(res => {
           this.moduleList=res.module
            console.log(res)
        })
        .catch(error => {
          
            console.log(error)
        })

  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 8; i++) {
    rs.push({
      title: `${val} 结果: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>
<style scoped>
.black {
  background-color: gary;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.fadeInUp {
  animation-name: fadeInUp;
}

.flex-demo {
  width:25%;
  float:left;
  line-height:1;
  text-align:center;
  text-align: center;
  color: black;
  background-color: #fff;
  
}
.flex-demo span{
  width:100%;
  font-size:10px;
}
.cell-icon {
  height: 64px;
  width: 64px;
  background-color: #eee;
}
.dots-style{
  color:red;
}
.moduleImg-style{
width:45px;
height:45px;
margin-top:12px;
}
.tab-content{
  padding:5px;
}



</style>

