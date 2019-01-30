<template>
  <div>
      
    <appStock v-for="index in stocksy" :key="index.id" :stock="index"></appStock>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from "./Stock.vue";

export default {
  components: {
    appStock: Stock
    
  },
  
  computed: {
      stocks(){
          return this.$store.getters.stockPortfolio
      },
            ...mapGetters({
                stocksy: 'stockPortfolio'
            })
            
            
        },
        created: function(){
            console.log("here");
      console.log(this.$store.getters.stockPortfolio);
      
  },
  
};
</script>

<style>
</style>
