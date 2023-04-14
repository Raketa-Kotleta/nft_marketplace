import {createApp} from 'vue'
import App from "./App.vue";
import PrimeVue from 'primevue/config';


import "primevue/resources/themes/lara-light-teal/theme.css";
    
//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";
import * as Web3 from 'web3'

import {Network, OpenSeaSDK} from "opensea-js";
// This example provider won't let you make transactions, only read-only calls:
const provider = window.ethereum;
const opensea = new OpenSeaSDK(provider,{
    networkName: Network.Goerli,
});
console.log(opensea);


// This example provider won't let you make transactions, only read-only calls:


const app = createApp(App);
app.use(PrimeVue);
app.mount("#app");

