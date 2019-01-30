const state = {
    funds: 1000,
    stocks: []
};

const mutations = {
    'BUY_STOCK'(state, { id, name, price, quantity }) {
        const record = state.stocks.find(element => element.id == id);
        console.log("record" + " quantity");
        console.log(record);
        console.log(quantity);
        if (record) {
            record.quantity += quantity;
            console.log("BUY_STOCK found record");

        } else {
            state.stocks.push({
                id: id,
                name: name + " in protfilio",
                price: price,
                quantity: quantity
            })
            console.log("BUY_STOCK not found record");
        }
        state.funds -= quantity * price;
    },
    'SELL_STOCK'(state, { stockId, stockName, stockPrice, stockQuantity }) {
        const record = state.stocks.find(element => element.id == stockId)
        console.log("stockQuantity");
        console.log(stockQuantity);
        if (typeof record != undefined) {
            if (record.quantity >= stockQuantity) {
                record.quantity -= stockQuantity;
            }
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockQuantity * stockPrice;
    },
    'SET_PORTFOLIO' (state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};
const actions = {
    sellStocks: function ({ commit }, order) {
        commit('SELL_STOCK', order);

    }
};
const getters = {
    funds: function () {
        return state.funds;
    },
    stockPortfolio (state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    

};

export default {
    state,
    mutations,
    actions,
    getters
};