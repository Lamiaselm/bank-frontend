import {ethers} from "ethers";

const SC_CLIENT = '0x5b591CB6f5ABf3b209bd1D3cEcA698bbF4BA9728'

export async function storeNewClient(refClient, hashProfile, seller, time) {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner();
    let abi = JSON.parse(`[ { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "string", "name": "refClient", "type": "string" } ], "name": "Client_profile_updated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "string", "name": "refClient", "type": "string" } ], "name": "New_Client_Registered", "type": "event" }, { "inputs": [ { "internalType": "string", "name": "_refClient", "type": "string" }, { "internalType": "string", "name": "_hashProfile", "type": "string" }, { "internalType": "bool", "name": "_seller", "type": "bool" }, { "internalType": "string", "name": "_time", "type": "string" } ], "name": "add_client_ref", "outputs": [ { "internalType": "bool", "name": "success", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "_refClient", "type": "string" } ], "name": "get_client_ref", "outputs": [ { "internalType": "string", "name": "refClient", "type": "string" }, { "internalType": "string", "name": "hashProfile", "type": "string" }, { "internalType": "string", "name": "previousHashProfile", "type": "string" }, { "internalType": "bool", "name": "seller", "type": "bool" }, { "internalType": "string", "name": "time", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "_refClient", "type": "string" }, { "internalType": "string", "name": "_newHashProfile", "type": "string" }, { "internalType": "string", "name": "_time", "type": "string" } ], "name": "update_client_profile", "outputs": [ { "internalType": "bool", "name": "success", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" } ]`);
    const contract = new ethers.Contract(SC_CLIENT, abi, signer);
    const result = await contract.add_client_ref(refClient, hashProfile, seller, time).send();
    console.log(result);
    return result
}

export async function updateClient(refClient, hashProfile, time) {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner();
    let abi = JSON.parse(`[ { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "string", "name": "refClient", "type": "string" } ], "name": "Client_profile_updated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "string", "name": "refClient", "type": "string" } ], "name": "New_Client_Registered", "type": "event" }, { "inputs": [ { "internalType": "string", "name": "_refClient", "type": "string" }, { "internalType": "string", "name": "_hashProfile", "type": "string" }, { "internalType": "bool", "name": "_seller", "type": "bool" }, { "internalType": "string", "name": "_time", "type": "string" } ], "name": "add_client_ref", "outputs": [ { "internalType": "bool", "name": "success", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "_refClient", "type": "string" } ], "name": "get_client_ref", "outputs": [ { "internalType": "string", "name": "refClient", "type": "string" }, { "internalType": "string", "name": "hashProfile", "type": "string" }, { "internalType": "string", "name": "previousHashProfile", "type": "string" }, { "internalType": "bool", "name": "seller", "type": "bool" }, { "internalType": "string", "name": "time", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "_refClient", "type": "string" }, { "internalType": "string", "name": "_newHashProfile", "type": "string" }, { "internalType": "string", "name": "_time", "type": "string" } ], "name": "update_client_profile", "outputs": [ { "internalType": "bool", "name": "success", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" } ]`);
    const contract = new ethers.Contract(SC_CLIENT, abi, signer);
    const result = await contract.update_client_profile(refClient, hashProfile, time).send();
    console.log(result);
    return result
}
