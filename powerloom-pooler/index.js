const lighthouse = require("@lighthouse-web3/sdk")
const axios = require("axios")
const dotenv = require("dotenv")
dotenv.config()
const data = {
    "ETH": [2023, 20325, 561516],
    "USDC": [2023, 20325, 561516],
    "1INCH": [2023, 20325, 561516],
    "wETH": [2023, 20325, 561516],
}
const text = JSON.stringify(data);
const api_key = process.env.LIGHTHOUSE_API_KEY;
const name = "snapSwapData";
let cid

const setData = async() =>{
    const response = await lighthouse.uploadText(text, api_key, name)
    console.log(response)
    cid = response.data.Hash
    // getData()
}

const getData = async()=>{
    const response = await axios.get(`https://gateway.lighthouse.storage/ipfs/${cid}`)
    console.log(response.data)
}
setData();
