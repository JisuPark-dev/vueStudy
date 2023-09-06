<template>

<!-- 모달 창 ui -->
<div class="black-bg" v-if="">
  <div class="white-bg">
    <h4>상세페이지임</h4>
    <p>상세 페이지 내용임</p>

  </div>

</div>

<!-- 메뉴 -->
  <div class="menu">
    <a v-for="menu in 메뉴들" :key="menu">{{ menu }}</a>
  </div>
  
<!-- 상품 목록   -->
  <div v-for="(product,i) in products" :key="i">
    <img src="./assets/room1.jpeg" class="room-img">
    <h4>{{ product }}</h4>
    <p>{{ prices[i] }} 만원</p>  
    <button @click="increase(i)">허위매물 신고</button> <span> 신고수 {{ 신고수[i] }} 건</span>
  </div>  
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      modalOpen : true,
      신고수 : [0,0,0],
      메뉴들 : ["Home","Shop","About"],
      prices : [1000,2000,3000],
      products: ["역삼동 원룸","청호동 원룸","신림동 원룸"]
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
