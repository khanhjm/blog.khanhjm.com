<template>
  <footer id="footer">Footer Time: {{ timeNow }}</footer>
</template>

<script>
export default {
  data() {
    return {
      timeNow: new Date(),
    };
  },
};
</script>

<style></style>
