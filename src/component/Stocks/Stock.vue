<template>
<div class="col-sm-6 col-md-4">
  <div class="panel panel-info">
    <div class="panel-heading">
      <div class="row">
        <h3 class="panel-title">{{ this.name }}       
             <small>( price  {{ this.price }})</small>
        </h3>
       
      </div>
    </div>
    <div class="panel-body">
      <div class="pull-left">
        <input class="form-control" type="number" min="0" v-model.number="quantity">
      </div>
      <div class="pull-rigth">
        <button class="btn btn-info" @click="buyStock" :disabled="
        !gotEnough ||
        quantity < 1 || 
        !Number.isInteger(quantity)">
        {{ gotEnough ? "buy "+ this.quantity : "not enough" }}</button>
      </div>
    </div>
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      quantity: 0,
      
    };
  },
  // what about Native with diving into a component
  props: { id: 0, name: "", price: 0},
  computed: {
    gotEnough: function(){
      return this.$store.getters.funds >= this.price*this.quantity ;
    }
  },
  methods: {
    buyStock: function(){
      const order = {
        id: this.id,
        name: this.name,
        price: this.price,
        quantity: this.quantity
      };
      console.log("buyStock");
      console.log(order);
      this.quantity=0;
      this.$store.dispatch('buyStock',order);
    }
  }

  // created: function() {
  //   this.price = Math.floor(Math.random() * 100) + 70;
  // }
};
</script>

<style scoped>
.panel {
  margin: 1em;
}
</style>
