import {createApp} from 'vue'
import App from "./App.vue";
import PrimeVue from 'primevue/config';


import "primevue/resources/themes/lara-light-teal/theme.css";
    
//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";
import  {ethers} from "ethers";
import * as Web3 from 'web3'
import {  Network } from 'opensea-js'

// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')


const app = createApp(App);
app.use(PrimeVue);
app.mount("#app");

