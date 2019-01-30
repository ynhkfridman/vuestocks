import App from './App.vue'
import Home from './component/Home.vue'
import Stocks from './component/Stocks/Stocks.vue'
import Portfolio from './component/Portfolio/Portfolio.vue'



export const routes=[
    {path: '/', component: Home},
    {path: '/portfolio', component: Portfolio},
    {path: '/stocks', component: Stocks}
   
    
];