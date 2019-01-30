<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand">Brand</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="portfolio" activeClass="active" tag="li">
            <a>portfolio</a>
          </router-link>
          <router-link to="stocks" activeClass="active" tag="li">
            <a>Stocks</a>
          </router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds {{ this.$store.getters.funds }}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a @click="endDay" href="#">end day</a>
          </li>
          <li class="dropdown" :class="{open: isopen}">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              @click="isopen = !isopen"
            >
              save & load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a @click="saveData" href="#">save</a>
              </li>
              <li role="separator" class="divider"></li>
              <li>
                <a href="#" @click="loadMyData">load</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: function() {
    return {
      isopen: false
    };
  },
  methods: {
    ...mapActions(["randomizeStocks"]),
    endDay: function() {
      this.randomizeStocks();
    },
    saveData: function() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    loadMyData: function() {
      this.$store.dispatch('loadData');
    }
  }
};
</script>

<style>
@keyframes fontbulger {
  0%,
  100% {
    font-size: 10px;
  }
  50% {
    font-size: 12px;
  }
}

#box {
  animation: fontbulger 2s infinite;
}
</style>
