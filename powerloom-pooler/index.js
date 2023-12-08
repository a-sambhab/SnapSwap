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
const epoch_id = 2670
let cid

const getlatestliquidity = async()=>{
    console.log(process.env.PROJECT_ID)
    // const response = await axios.get(`https://uniswapv2-api.powerloom.io/data/${epoch_id}/${process.env.PROJECT_ID}`)
    const response = await axios.get(`https://uniswapv2-api.powerloom.io/data/${epoch_id}/aggregate_24h_top_tokens_lite:9fb408548a732c85604dacb9c956ffc2538a3b895250741593da630d994b1f27:UNISWAPV2/`)
    // console.log(response.data)
}

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
// setData();
getlatestliquidity();
