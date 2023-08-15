import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "@/pages/index";
import About from "@/pages/about";
import Introduction from "@/pages/Introduction";
import Agreemen from "@/pages/agreemen";
import Policy from "@/pages/policy";
import Head from "./components/web/Head";
import Web3 from "web3";
import { Contract, ethers } from "ethers";
import { Toast } from "@douyinfe/semi-ui";
import abi from "./abi/ido.json";
function App() {
  const connectWallet = async() => {
    var web3Provider;
    var windowNew = window as any;
        if (windowNew.ethereum) {
            web3Provider = windowNew.ethereum;
            try {
                await windowNew.ethereum.enable();
            } catch (error) {
                console.error("User denied account access")
            }
        } else if (windowNew.web3) {   
            web3Provider = windowNew.web3.currentProvider;
        } else {
            alert("No MetaMask！")
            web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
        }
        var web3 = new Web3(web3Provider);
      var id =  await web3.eth.net.getId()
      console.log(id);
        // if(id != 1){
        //   var rpc = {
        //     chainId: "0x1",
        //     chainName: "Ethereum Mainnet",
        //     nativeCurrency: {
        //       name: "ETH",
        //       symbol: "ETH",
        //       decimals: 18,
        //     },
        //     rpcUrls: ["https://eth.llamarpc.com"],
        //     blockExplorerUrls: ["https://etherscan.io"],
        //   };
        //   windowNew.ethereum.request({
        //     method: 'wallet_addEthereumChain', 
        //     params: [{
        //         chainId: rpc.chainId, 
        //         chainName: rpc.chainName, 
        //         rpcUrls: [
        //             rpc.rpcUrls[0], 
        //         ],
        //         iconUrls: [
        //             'https://testnet.hecoinfo.com/favicon.png' 
        //         ],
        //         blockExplorerUrls: [
        //             rpc.blockExplorerUrls[0] 
        //         ],
        //         nativeCurrency: rpc.nativeCurrency
        //     }]
        // })
        // }
        if(id != 5){
          var rpc = {
            chainId: "0x5",
            chainName: "Goerli",
            nativeCurrency: {
              name: "ETH",
              symbol: "ETH",
              decimals: 18,
            },
            rpcUrls: ["https://rpc.ankr.com/eth_goerli"],
            blockExplorerUrls: ["https://goerli.etherscan.io"],
          };
          windowNew.ethereum.request({
            method: 'wallet_addEthereumChain', 
            params: [{
                chainId: rpc.chainId, 
                chainName: rpc.chainName, 
                rpcUrls: [
                    rpc.rpcUrls[0], 
                ],
                iconUrls: [
                    'https://testnet.hecoinfo.com/favicon.png' 
                ],
                blockExplorerUrls: [
                    rpc.blockExplorerUrls[0] 
                ],
                nativeCurrency: rpc.nativeCurrency
            }]
        })
        }
        let provider = new ethers.providers.Web3Provider(web3Provider);
        let walletWithProvider:any = provider.getSigner();
       setWalletWithProvider(walletWithProvider);
     
        var privateAddress = await walletWithProvider.getAddress();
        setPrivateAddress(privateAddress);
        setAddressName(privateAddress.slice(0,4)+"XXXXX"+privateAddress.slice(-4))

  };

  const mint =async (amount:any) => {
    if(!walletWithProvider){
      const opts = {
        content: 'No wallet connected',
        duration: 3,
    };
    Toast.error(opts);
  return;
  }
    var contracts = new Contract("0x000000003Ef267F9F977D1Ed564B9EC2378e4156", abi, walletWithProvider);
    var invinteAdr = window.location.hash.slice(5);
    if(!invinteAdr){
      invinteAdr = "0x0000000000000000000000000000000000000000";
    }
    console.log(invinteAdr);
    try {
      await contracts.smashEggs(amount,invinteAdr,{value:ethers.utils.parseUnits("0.001","ether").mul(amount)});
    } catch (error) {
      console.log(error);
      const opts = {
        content: 'Mint Error',
        duration: 3,
    };
    Toast.error(opts);
    }
  }
  const synthesisHandle =async (amount:any) => {
    if(!walletWithProvider){
      const opts = {
        content: 'No wallet connected',
        duration: 3,
    };
    Toast.error(opts);
  return;
  }
    var contracts = new Contract("0x000000003Ef267F9F977D1Ed564B9EC2378e4156", abi, walletWithProvider);

    try {
      await contracts.synthesisHandle(amount);
    } catch (error) {
      const opts = {
        content: 'Synthesis Error',
        duration: 3,
    };
    Toast.error(opts);
    }
  }

  const setSchedule1 =async () => {
    var currentProvider:any = new Web3.providers.HttpProvider('https://eth-goerli.api.onfinality.io/public');
    let web3Provider = new ethers.providers.Web3Provider(currentProvider);
    var contracts = new Contract("0x000000003Ef267F9F977D1Ed564B9EC2378e4156", abi, web3Provider);
    console.log(contracts)
    var amount = await contracts.mintSupply();
   var seli = (amount.toNumber()*100)/10000;
   console.log(seli);
   setMintAmount((seli.toFixed(5)) as any);
   var amount = await contracts.synthesisSupply();
   var seli = (amount.toNumber()*100)/2000;
   console.log(seli);
   setSynthesisAmount((seli.toFixed(5)) as any);
  }
  useEffect(() => {
    setSchedule1();
  }, []);
  const [mintAmount, setMintAmount] = useState(0);
  const [synthesisAmount, setSynthesisAmount] = useState(0);
  const [walletWithProvider, setWalletWithProvider] = useState(undefined);
  const [addressName, setAddressName] = useState("Connect Wallet")
  const [privateAddress, setPrivateAddress] = useState("")

  return (
    <>
      <Head connectWallet={connectWallet} addressName = {addressName}/>
      <Routes>
        <Route path="/" element={<Index connectWallet={connectWallet} addressName = {addressName}/>} />
        <Route path="/NFT" element={<About mint = {mint} synthesisHandle = {synthesisHandle} mintAmount = {mintAmount} synthesisAmount = {synthesisAmount}/>} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/agreemen" element={<Agreemen />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </>
  );
}

export default App;
