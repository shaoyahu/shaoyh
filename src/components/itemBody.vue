<template>
  <div class="itemBody">
    <div class="itemMain">
      <slot></slot>
    </div>
    <el-affix style="width: 20%;" :offset="220">
      <div class="itemAside">
        <div style="margin-bottom:20px">CONTENT</div>
        <slot name="aside">
          <div class="menuAside" v-for="item, index in props.list" :key="index" @click="anchorTo(item)">
            {{ item.title }}
          </div>
        </slot>
      </div>
    </el-affix>
  </div>
</template>

<script setup lang='ts'>

const props = defineProps({
  list: {
    type: Array<any>,
    default: []
  }
})

const anchorTo = (item: any) => {
  const el: any = document.getElementById(item.id)
  // document.body.scrollTop = el.offsetTop
  // console.log(el)
  document.body.scrollTop = document.documentElement.scrollTop = el.offsetTop - 60
}

</script>

<style scoped>
.itemBody {
  display: flex;
  width: 100%;
  /* height: calc(100% - 50px);
  overflow-y: scroll; */
}

.itemMain {
  width: 100%;
  /* height: 100%; */
  /* overflow-y: scroll; */
  /* height: calc(100% - 50px); */
  /* background-color: cyan; */
  /* box-sizing: border-box; */
}

.itemAside {
  width: 100%;
  /* height: auto; */
  /* background-color: cyan; */
  padding: 20px;
  box-sizing: border-box;
}

.menuAside {
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  /* background-color: yellow; */
}
.menuAside:hover{
  color: #47a1fb;
}
</style>
