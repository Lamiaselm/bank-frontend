import {ethers} from "ethers";

export async function callTestContract() {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner();
    let abi = JSON.parse(`[ { "inputs": [ { "internalType": "string", "name": "newText", "type": "string" } ], "name": "changeText", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "greet", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" } ]`);
    const contract = new ethers.Contract("0xCc4f72a03708CD9d2872e22c9b3E3828e669a9d3", abi, signer);
    const result = await contract.greet();
    console.log(result);
    return result
}

export async function callChangeTextContract(msg) {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner();
    let abi = JSON.parse(`[ { "inputs": [ { "internalType": "string", "name": "newText", "type": "string" } ], "name": "changeText", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "greet", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" } ]`);
    const contract = new ethers.Contract("0xCc4f72a03708CD9d2872e22c9b3E3828e669a9d3", abi, signer);
    const result = await contract.changeText(msg).send();
    console.log(result);
    return result
}
