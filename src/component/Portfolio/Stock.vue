<template>

  <div class="panel panel-info col-sm-6 col-md-4">
    <div class="panel-heading">
      <div class="row">
        <h3 class="panel-title">{{ stock.name }}       
             <small>( price  {{ stock.price }} | quantity  {{stock.quantity}})</small>
        </h3>
       
      </div>
    </div>
    <div class="panel-body">
      <div class="pull-left">
        <input class="form-control" type="number" min="0" v-model.number="myQuantity">
      </div>
      <div class="pull-rigth">
        <button class="btn btn-info" 
        @click="sellStock" 
        :disabled="(stock.quantity - this.myQuantity) < 0 || !Number.isInteger(this.myQuantity) || myQuantity == 0 "
        >{{ "sell" }} + {{ this.myQuantity }}
        </button>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
     myQuantity: 0,
      
    };
  },
  // what about Native with diving into a component
  props: ['stock'] ,
  methods: { 
      sellStock: function(){
        
        const order={
          stockId: this.stock.id,
          stockName: this.stock.name,
          stockPrice: this.stock.price,
          stockQuantity: this.myQuantity}
          this.$store.dispatch('sellStocks',order);
          this.myQuantity=0;
          
      }
  },
  created: function(){
    console.log("now im new profolio Stock.vue  ");
  }

};
</script>

<style scoped>
.panel {
  margin: 1em;
}
</style>
