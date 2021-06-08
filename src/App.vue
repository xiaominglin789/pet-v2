<template>
  <!-- <router-view v-slot="{ Component }">
    <transition name="fade">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </transition>
  </router-view> -->
  <router-view />
  <!-- 菜单项 -->
  <com-app-menu />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ComAppMenu from "@/components/public/ComAppMenu.vue";

export default defineComponent({
  name: "App",
  components: {
    ComAppMenu,
  },
  setup() {
    const Component = ref();

    return {
      Component,
    };
  },
});
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100vw;
  min-height: 100vh;
  position: relative;
}
.page {
  width: 100%;
}
.com {
  width: 100%;
}
</style>
