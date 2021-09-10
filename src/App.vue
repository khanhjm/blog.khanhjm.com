<template>
  <router-view name="header"></router-view>
  <main id="main">
    <router-view v-slot="{ Component }">
      <fade-transition entry="left" exit="left" mode="out-in">
        <component :is="Component" />
      </fade-transition>
    </router-view>
  </main>
  <router-view name="footer"></router-view>
</template>

<script>
import { defineComponent } from "vue";
import { FadeTransition } from "vue3-transitions";

export default defineComponent({
  components: { FadeTransition },
});
</script>

<style>
body {
  margin: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}
</style>
