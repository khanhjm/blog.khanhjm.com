<template>
  <footer
    id="footer"
    class="footer fixed-bottom"
    style="background-color: #80ffff; height: 24px"
  >
    <div id="timeFooter" class="container">Footer Time: {{ timeNow }}</div>
  </footer>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      timeNow: moment(Date.now()).format("DD/MM/YYYY hh:mm:ss"),
    };
  },
  methods: {
    startInterval: function () {
      setInterval(() => {
        this.timeNow = moment(Date.now()).format("DD/MM/YYYY hh:mm:ss");
      }, 10);
    },
  },
  mounted() {
    this.startInterval();
  },
};
</script>

<style></style>
