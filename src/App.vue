<template>

<!-- 모달 창 ui -->
<div class="black-bg" v-if="modalOpen == true">
  <div class="white-bg">
    <h4>상세페이지임</h4>
    <p>상세 페이지 내용임</p>
    <button @click="modalOpen=false">닫기</button>
  </div>

</div>

<!-- 메뉴 -->
  <div class="menu">
    <a v-for="menu in 메뉴들" :key="menu">{{ menu }}</a>
  </div>
  
<!-- 상품 목록   -->
  <div v-for="(room,i) in rooms" :key="i">
    <img :src="`${ room.image }`" class="room-img" @click="modalOpen=true">
    <h4>{{ room.title }}</h4>
    <p>{{ room.price }} 만원</p>  
    <p>내용 : {{ room.content }} </p>  
    <button @click="increase(i)">허위매물 신고</button> <span> 신고수 {{ 신고수[i] }} 건</span>
  </div>  
</template>

<script>
import rooms from "./assets/data";


export default {
  name: 'App',
  data(){
    return {
      modalOpen : false,
      신고수 : [0,0,0],
      메뉴들 : ["Home","Shop","About"],
      prices : [1000,2000,3000],
      products: ["역삼동 원룸","청호동 원룸","신림동 원룸"],
      rooms

    }
  },
  methods:{
    increase(i){
      this.신고수[i]+=1;
    }
  },
  components: {

  }
}
</script>

<style>
body{
  margin:0;
}
div{
  box-sizing: border-box;
}
.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position:fixed;padding: 20px;
}
.white-bg{
  width: 100%;
  background: white;
  border-radius: 9px;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a{
  color: white;
  padding: 10px;
}
.room-img{
  width: 50%;
  margin-top:40px;
}
</style>
