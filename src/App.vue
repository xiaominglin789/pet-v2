<template>
  <div>
    <p>修改语言</p>
    <span>{{ t("lauguage.change") }}</span><select ref="selectRef" @change="onTest2">
      <option :value="t('lauguage.chinese')">{{ t('lauguage.chinese') }}</option>
      <option :value="t('lauguage.english')">{{ t('lauguage.english') }}</option>
    </select>
  </div>
  <div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <p class="title">title</p>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { useVueI18n } from "@/hooks/useVueI18n";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const { t, change } = useVueI18n();
    const langs = [
      { title: t("lauguage.chinese"), value: "cn" },
      { title: t("lauguage.english"), value: "en" },
    ]
    const state = reactive({
      value1: 0,
      value2: 'a'
    });
    const selectRef = ref();
    const currentDate = ref(new Date(2021, 0, 17));

    onMounted(() => {
      console.log(import.meta.env.VITE_APPLICATION);
    });

    const onTest = (value: Event) => {
      console.log(value.target);
      // value && change(value);
    }

    const onTest2 = (e: any) => {
      const index: number = e.target.options["selectedIndex"];
      change(langs[index].value);
    }

    return {
      state,
      langs,
      t,
      onTest,
      onTest2,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate,
    }
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
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
