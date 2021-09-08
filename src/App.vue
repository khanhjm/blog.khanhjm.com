<template>
  <div id="app">
    <router-view name="header"></router-view>
    <main>
      <router-view v-slot="{ Component }">
        <FadeTransition entry="left" exit="left" mode="out-in">
          <component :is="Component" />
        </FadeTransition>
      </router-view>
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { FadeTransition } from "vue3-transitions";

export default defineComponent({
  components: { FadeTransition },
});
</script>

<style></style>
