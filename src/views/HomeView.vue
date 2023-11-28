<script>
import {Web3} from "web3";
import {ethers} from "ethers";
import {callTestContract} from "@/contracts";
export default {
  name: 'HomeView',
  data() {
    return {
      connected: false,
      contractResult: null
    }
  },
  mounted() {
    this.connect()
  },
  methods: {
    async callTestContract() {
      this.contractResult = await callTestContract()
    },
    clearValue() {
      this.contractResult = null
    },
    connect() {
      // this connects to the wallet>
      if (window.ethereum) { // first we check if metamask is installed
        window.ethereum.request({method: 'eth_requestAccounts'})
            .then(() => {
              this.connected = true; // If users successfully connected their wallet
            });
      }
    },
    // async callTestContract() {
    //   const provider = new ethers.BrowserProvider(window.ethereum)
    //   const signer = await provider.getSigner();
    //   let abi = JSON.parse(`[ { "inputs": [ { "internalType": "string", "name": "newText", "type": "string" } ], "name": "changeText", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "greet", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" } ]`);
    //   const contract = new ethers.Contract("0xCc4f72a03708CD9d2872e22c9b3E3828e669a9d3", abi, signer);
    //   const result = await contract.greet();
    //   console.log(result);
    //   this.contractResult = result
    // },
    async callChangeTextContract() {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner();
      let abi = JSON.parse(`[ { "inputs": [ { "internalType": "string", "name": "newText", "type": "string" } ], "name": "changeText", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "greet", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" } ]`);
      const contract = new ethers.Contract("0xCc4f72a03708CD9d2872e22c9b3E3828e669a9d3", abi, signer);
      const result = await contract.changeText("Hello World!!").send();
      console.log(result);
      this.contractResult = result
    }
  }
 }
</script>

<template>
  <main>
    <div>
      <!-- connect-wallet button is visible if the wallet is not connected -->
<!--      <button v-if="!connected">Connect wallet</button>-->
      <!-- call-contract button is visible if the wallet is connected -->
      <p></p>
      <button v-if="connected" @click.prevent="callTestContract">Call contract</button>
      {{ contractResult }}
      <p></p>
      <button v-if="connected" @click.prevent="callChangeTextContract">Call change Text</button>
      {{ contractResult }}
      <p></p>
      <button v-if="connected" @click.prevent="clearValue">Clear value</button>
    </div>
  </main>
</template>
