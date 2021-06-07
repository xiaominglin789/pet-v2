<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <p class="title">title</p>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    onMounted(() => {
      console.log(import.meta.env.VITE_APPLICATION);
    });
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  width: 300px;
  height: 36px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
