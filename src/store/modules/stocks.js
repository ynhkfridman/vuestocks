import stocks from '../../data/stocks'

const state = {
    stocks: [] 
};
const mutations = {
    'SET_STOCKS' (state , stocks){
        state.stocks=stocks;
    },
    'RND_STOCKS' (state){
        state.stocks.forEach(stock => {
            stock.price=Math.floor(Math.random() * 100)+70
        });
    }

};
const actions = {
    buyStock: function({ commit } , order){
        commit('BUY_STOCK',order);
    },
    setInitStocks: function({ commit }){
        commit('SET_STOCKS',stocks);
    },
    randomizeStocks: function({ commit }){
       
        commit('RND_STOCKS');
    }
};
const getters = {
    stocks: function(){
        return  state.stocks;
    }
};
export default{
    state,
    mutations,
    actions,
    getters

};