<template>
  <div v-show="showMenu" :class="['com app-menu', className]">
    <router-link
      v-for="(item, index) in menu"
      :key="index"
      :to="item.to"
      @click.passive="onSaveCurrentRoute(item)"
      class="menu-item"
      exact
    >
      <i :class="['iconfont', item.icon]"></i>
      <span>{{ item.title }}</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">import { computed, defineProps } from "vue"

defineProps({
  className: String
})

const menu = [
  {
    title: "首页",
    to: "/",
    icon: ""
  },
  {
    title: "a",
    to: "/a",
    icon: ""
  },
  {
    title: "b",
    to: "/b",
    icon: ""
  },
  {
    title: "c",
    to: "/c",
    icon: ""
  },
]
const showMenu = computed(() => {
  return true
})

const onSaveCurrentRoute = (item: any) => {

}
</script>

<style lang="scss" scoped>
.app-menu {
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 5px 2px #ccc;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #fff;
  .menu-item {
    box-sizing: border-box;
    flex: 1;
    height: inherit;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
    .iconfont {
      font-size: 24px;
    }
    span {
      font-size: 26px;
    }
  }
  .menu-item:hover {
    color: #fcd34c;
  }
  .link-exact-active-class {
    color: #fcd34c;
    .iconfont {
      transition: 0.3s;
      font-size: 28px;
    }
  }
}
</style>