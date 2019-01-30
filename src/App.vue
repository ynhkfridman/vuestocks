<template>
  <div class="container" id="app">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <!-- <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"></div>-->
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Stocks from "./component/Stocks/Stocks.vue";
import Home from "./component/Home";
import Header from "./component/Header";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    "app-header": Header,
    appStocks: Stocks
  },
  created: function() {
    this.$store.dispatch("setInitStocks");
  }
};
</script>

<style>
body {
        padding: 30px;
    }
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
