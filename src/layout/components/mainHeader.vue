<template>
  <div class="main_header">
    <el-image class="main_header_img" src="/syh.png" fit="cover" />
    <span @click="goto">Shao yh</span>
    <a class="header_link" href="https://github.com/shaoyahu/shaoyh-ui" target="_blank">
      <img src="https://fastly.jsdelivr.net/npm/@vant/assets/github.svg">
    </a>
    <div class="blog" @click="goBlog">
      <span>我的CSDN博客</span>
      <i class="fa fa-external-link"></i>
    </div>

  </div>
</template>

<script setup lang='ts'>
import { useRouter } from "vue-router"
const router = useRouter()
const goto = () => {
  router.push('/')
}
const goBlog = () => {
  window.open("https://blog.csdn.net/shaoyahu?type=blog")
}
</script>

<style scoped>
.main_header {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  /* background-color: black; */
  background-size: 6px 6px;
  background-image: radial-gradient(transparent 1px, #fff 1px);
  backdrop-filter: saturate(50%) blur(4px);
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dcdfe6;
  box-sizing: border-box;
  z-index: 20;
}
.main_header_img{
  width: 35px;
  margin-left: 30px;
}
.main_header>span {
  display: block;
  background-color: #fff;
  font-size: 24px;
  font-weight: bolder;
  margin-left: 10px;
}

.main_header .header_link {
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #000;
  margin-left: auto;
  margin-right: 0px;
}

.main_header .header_link img {
  width: 30px;
  height: 30px;
}

.blog {
  width: 180px;
  padding: 10px;
  color: #1989fa;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.blog>*{
  cursor: pointer;
}
.blog>*:hover{
  color: #409eff;
}
.blog>*:nth-child(2){
  margin-top: 2px;
  margin-left: 5px;
}
</style>
