<template>
  <div class="home position_relative">

    <!-- 遮罩 -->
    <div class="d_fixed position_absolute w_100 h_100 nap"></div>

    <!-- 背景墙 -->
    <div v-for="i2, index2 in hang" class="over_h d_flex flex_column j_saround">
      <div class="position_relative over_h d_flex j_saround" style="width: 100%;height:220px;">
        <div class="m_10" v-for="i, index in lie">
          <yh-flip-card :ref="refObj[`yhFlipCardRef${i2}-${i}`]" speed="middle" :angle="180"
                        :shadow="[0, 0, 0, 0, '#fff']" :shadow2="[1, 1, 5, 1, '#777']" :pers="1000" width="100"
                        height="200">
            <template #back>
              <div :style="{ width: '100%', height: '100%', backgroundColor: colorList[index] }"></div>
            </template>
            <template #front>
              <div class="caed"></div>
            </template>
          </yh-flip-card>
        </div>
      </div>
    </div>

    <!-- 标题 -->
    <div class="title position_absolute" :style="{ transform: `rotateX(${x * 0.5}deg) rotateY(${y * 0.5}deg)` }">
      <span class="mainTitle" :style="{ marginLeft: `${y * -2}px`, marginTop: `${10 + x * 2}px` }">Shaoyh UI</span>
      <span class="sub" :style="{ marginLeft: `${y * -2}px`, marginTop: `${10 + x * 2}px` }">基于vue3 , 一个有意思的组件库</span>
      <div id="_startBtn" class="startBtn startBtnShadow"
           :style="{ marginLeft: `${-110 + y * -2}px`, marginTop: `${60 + x * 1.5}px` }">
        快速使用
      </div>
    </div>

    <!-- <div class="startBtn position_relative">快速开始</div> -->

    <!-- github 角标 -->
    <a href="https://github.com/shaoyahu/shaoyh-ui" target="_blank" class="github-corner"
       aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250"
           style="fill:rgb(95, 94, 94); color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor" class="octo-body"></path>
      </svg>
    </a>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { useRouter } from "vue-router"
const router = useRouter()

// 背景卡片参数 行数 列数 卡片颜色
let hang = 10
let lie = 16
let colorList = ['#eccc68', '#ff7f50', '#ff6b81', '#ffa502', '#ff6348', '#ff4757', '#7bed9f', '#5352ed', '#2ed573', '#1e90ff', '#FD7272', '#9AECDB', '#D6A2E8', '#F97F51', '#55E6C1', '#EAB543', '#ff5252']

// 将所有卡片变成响应式对象
const refObj: any = {}
for (let i = 1; i < hang + 1; i++) {
  for (let j = 1; j < lie + 1; j++) {
    refObj[`yhFlipCardRef${i}-${j}`] = ref(null)
  }
}

let x = ref(0)
let y = ref(0)
document.addEventListener('mousemove', function (e) {
  //mousemove 鼠标一移动，就会触发事件
  //获取鼠标最新的坐标
  if (e.pageX >= document.body.scrollWidth / 2) {
    y.value = 1
  } else {
    y.value = -1
  }
  if (e.pageY >= document.body.scrollHeight / 2) {
    x.value = -1
  } else {
    x.value = 1
  }
})

const rotateAllBack = () => {
  for (let i = 1; i < hang + 1; i++) {
    for (let j = 1; j < lie + 1; j++) {
      setTimeout(() => {
        refObj[`yhFlipCardRef${i}-${j}`].value[0].rotate()
      }, 50 * i * j);
    }
  }
  setTimeout(rotateAllfront, 40 * hang * lie)
}

const rotateAllfront = () => {
  for (let i = 1; i < hang + 1; i++) {
    for (let j = 1; j < lie + 1; j++) {
      setTimeout(() => {
        refObj[`yhFlipCardRef${i}-${j}`].value[0].noRotate()
      }, 30 * i * j);
    }
  }
}

const rotateOne = () => {
  let num1 = Math.floor(Math.random() * hang + 1)
  let num2 = Math.floor(Math.random() * lie + 1)
  refObj[`yhFlipCardRef${num1}-${num2}`].value[0].rotate()
  setTimeout(() => {
    refObj[`yhFlipCardRef${num1}-${num2}`].value[0].noRotate()
  }, 2000);
}


onMounted(() => {
  setTimeout(rotateAllBack, 300)
  setTimeout(() => {
    setInterval(() => {
      rotateOne()
      rotateOne()
      rotateOne()
    }, 500);
  }, 9000);

  document.getElementById('_startBtn')?.addEventListener('mousedown', (e: any) => {
    e.target.classList.toggle('startBtnShadow')
  })
  document.getElementById('_startBtn')?.addEventListener('mouseup', (e: any) => {
    e.target.classList.toggle('startBtnShadow')
    router.push('/index')
  })
})
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  background-color: #eee;
  overflow: hidden;
  perspective: 300px;
}

.nap {
  background-color: rgba(255, 255, 255, 0.21);
  z-index: 10;
  filter: blur(30px);
}

.yh-flip-card {
  perspective-origin: 10%;
  -webkit-perspective-origin: 10%;
}

.caed {
  width: 100%;
  height: 100%;
  background-color: #eee;
}

/* 主标题 */
.title {
  left: 50%;
  top: 18%;
  font-size: 90px;
  width: 0vw;
  height: 400px;
  margin-left: -25%;
  background-color: rgb(230, 235, 252);
  border: 1px solid rgb(101, 157, 230);
  font-family: Metropolis, sans-serif;
  font-weight: bolder;
  border-radius: 15px;
  color: rgb(4, 0, 255);
  animation: open 1s 2s ease-out forwards;
  z-index: 22;
  transition: .4s ease-in;
  perspective: 300px;
  scroll-behavior: smooth;
  opacity: 0;
}

.title * {
  opacity: 0;
  display: block;
  transform: translateY(-20px);
  animation: showTxt 0.5s 3s ease-in forwards;
}

.mainTitle {
  transition: .4s ease-in;
  text-align: center;
  text-shadow: 8px 8px 3px rgb(173, 173, 173);
}

/* 副标题 */
.sub {
  font-size: 22px;
  text-align: center;
  color: rgb(255, 57, 43);
  text-shadow: 8px 8px 3px rgb(184, 184, 184);
  transition: .4s ease-in;
}

.startBtn {
  width: 220px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin-top: 60px;
  font-size: 20px;
  position: relative;
  left: 50%;
  margin-left: -110px;
  color: rgb(37, 14, 241);
  cursor: pointer;
  background-color: #91f1ae;
  border: 1px solid #7ef5a2;
  box-shadow: 4px 4px 1px #eee;
  transition: .4s ease-in;
  scroll-behavior: smooth;
}

.startBtn::before {
  content: '';
  position: absolute;
  width: 220px;
  height: 4px;
  background-color: rgb(40, 179, 132);
  bottom: -4px;
  left: 3px;
  transform: skewX(45deg);
}

.startBtn::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 60px;
  background-color: rgb(54, 228, 170);
  top: 2px;
  right: -5px;
  transform: skewY(45deg);
}

.startBtnShadow::before {
  content: '';
  position: absolute;
  width: 220px;
  height: 10px;
  background-color: rgb(40, 179, 132);
  bottom: -10px;
  left: 4px;
  transform: skewX(45deg);
}

.startBtnShadow::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 60px;
  background-color: rgb(54, 228, 170);
  top: 6px;
  right: -10px;
  transform: skewY(45deg);
}

.startBtn:active {
  transform: translate(9px, 9px) !important;
}

.startBtn:active .startBtn::before {
  content: '';
  position: absolute;
  width: 0px;
  height: 0px;

}

@keyframes open {
  10% {
    opacity: 1;
  }

  100% {
    width: 50vw;
    opacity: 1;
  }
}

@keyframes showTxt {
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

/* github 样式 */
.github-corner * {
  z-index: 24;
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out
}

@keyframes octocat-wave {

  0%,
  100% {
    transform: rotate(0)
  }

  20%,
  60% {
    transform: rotate(-25deg)
  }

  40%,
  80% {
    transform: rotate(10deg)
  }
}

@media (max-width:500px) {
  .github-corner:hover .octo-arm {
    animation: none
  }

  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out
  }
}
</style>
