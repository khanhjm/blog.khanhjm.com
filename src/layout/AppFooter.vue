<template>
  <footer
    id="footer"
    class="footer fixed-bottom"
    style="height: 24px; border-bottom: 1px solid #e5e9ef; background-color: #e3f2fd"
  >
    <div id="timeFooter" class="container">The time now: {{ timeNow }}</div>
  </footer>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      timeNow: moment(Date.now()).format("DD/MM/YYYY HH:mm:ss"),
    };
  },
  methods: {
    startInterval: function () {
      setInterval(() => {
        this.timeNow = moment(Date.now()).format("DD/MM/YYYY HH:mm:ss");
      }, 10);
    },
  },
  mounted() {
    this.startInterval();
  },
};
</script>

<style></style>
