<template>
  <div>
    <mainHeader />
    <div class="container">
      <!-- 边缘菜单 -->
      <mainAside />

      <!-- 主页内容 -->
      <div class="main">
        <router-view class="routerView" v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import mainHeader from './components/mainHeader.vue'
import mainAside from './components/mainAside.vue'


</script>

<style scoped>
.container {
  height: calc(100vh - 60px);
  /* background-color: rgb(150, 177, 235); */
  display: flex;
  margin-top: 60px;
}

.container .main {
  padding: 20px;
  flex: 1;
  margin-left: 250px;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter-active {
  transition-delay: 0.3s;
}
</style>
