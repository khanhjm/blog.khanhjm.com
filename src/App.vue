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

<style></style>
