import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "@/pages/index";
import About from "@/pages/about";
import Introduction from "@/pages/Introduction";
import Agreemen from "@/pages/agreemen";
import Policy from "@/pages/policy";
import Head from "./components/web/Head";
import Web3 from "web3";
import { BigNumber, Contract, ethers } from "ethers";
import { Toast } from "@douyinfe/semi-ui";
import abi from "./abi/ido.json";
import axios from "axios";
import BalanceTree from "./tree/balance-tree";
function App() {
  const connectWallet = async () => {
    let web3Provider;
    const windowNew = window as any;
    if (windowNew.ethereum) {
      web3Provider = windowNew.ethereum;
      try {
        await windowNew.ethereum.enable();
      } catch (error) {
        console.error("User denied account access");
      }
    } else if (windowNew.web3) {
      web3Provider = windowNew.web3.currentProvider;
    } else {
      alert("No MetaMask！");
      web3Provider = new Web3.providers.HttpProvider("http://localhost:8545");
    }
    const web3 = new Web3(web3Provider);
    const id = await web3.eth.net.getId();
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
    if (id != 5) {
      const rpc = {
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
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: rpc.chainId,
            chainName: rpc.chainName,
            rpcUrls: [rpc.rpcUrls[0]],
            iconUrls: ["https://testnet.hecoinfo.com/favicon.png"],
            blockExplorerUrls: [rpc.blockExplorerUrls[0]],
            nativeCurrency: rpc.nativeCurrency,
          },
        ],
      });
    }
    const provider = new ethers.providers.Web3Provider(web3Provider);
    const walletWithProvider: any = provider.getSigner();
    setWalletWithProvider(walletWithProvider);

    const privateAddress = await walletWithProvider.getAddress();
    setPrivateAddress(privateAddress);
    setAddressName(
      privateAddress.slice(0, 4) + "......" + privateAddress.slice(-4)
    );
    checkAirdrop(privateAddress);
  };

  const mint = async (amount: any) => {
    if (!walletWithProvider) {
      const opts = {
        content: "No wallet connected",
        duration: 3,
      };
      Toast.error(opts);
      return;
    }

    const bools = checkAddress(privateAddress, textList);
    if (!bools) {
      const opts = {
        content: "Not In The Whitelist",
        duration: 3,
      };
      Toast.error(opts);
      return;
    }
    const contracts = new Contract(
      "0x000000003Ef267F9F977D1Ed564B9EC2378e4156",
      abi,
      walletWithProvider
    );
    let invinteAdr = window.location.hash.slice(6);
    console.log(window.location.hash);
    if (!invinteAdr) {
      invinteAdr = "0x0000000000000000000000000000000000000000";
    }
    console.log(invinteAdr);
    try {
      const currentObj1 = currentObj as any;
      const proof0 = (tree as any).getProof(
        currentObj1.index | 0,
        currentObj1.address,
        BigNumber.from(currentObj1.amount | 0)
      );
      const tx = await contracts.smashEggs(
        proof0,
        currentObj1.index,
        amount,
        invinteAdr,
        { value: ethers.utils.parseUnits("0.001", "ether").mul(amount) }
      );
    } catch (error) {
      console.log(error);
      const opts = {
        content: "Mint Error",
        duration: 3,
      };
      Toast.error(opts);
    }
  };
  const synthesisHandle = async (amount: any) => {
    if (!walletWithProvider) {
      const opts = {
        content: "No wallet connected",
        duration: 3,
      };
      Toast.error(opts);
      return;
    }
    const contracts = new Contract(
      "0x000000003Ef267F9F977D1Ed564B9EC2378e4156",
      abi,
      walletWithProvider
    );

    try {
      await contracts.synthesisHandle(amount);
    } catch (error) {
      const opts = {
        content: "Synthesis Error",
        duration: 3,
      };
      Toast.error(opts);
    }
  };

  const setSchedule1 = async () => {
    const currentProvider: any = new Web3.providers.HttpProvider(
      "https://eth-goerli.api.onfinality.io/public"
    );
    const web3Provider = new ethers.providers.Web3Provider(currentProvider);
    const contracts = new Contract(
      "0x000000003Ef267F9F977D1Ed564B9EC2378e4156",
      abi,
      web3Provider
    );
    console.log(contracts);
    var amount = await contracts.mintSupply();
    var seli = (amount.toNumber() * 100) / 10000;
    console.log(seli);
    setMintAmount(seli.toFixed(5) as any);
    var amount = await contracts.synthesisSupply();
    var seli = (amount.toNumber() * 100) / 2000;
    console.log(seli);
    setSynthesisAmount(seli.toFixed(5) as any);
  };
  useEffect(() => {
    setSchedule1();
  }, []);
  const getFragmentAmount = async () => {
    if (!walletWithProvider) {
      const opts = {
        content: "No wallet connected",
        duration: 3,
      };
      Toast.error(opts);
      return;
    }
    const currentProvider: any = new Web3.providers.HttpProvider(
      "https://eth-goerli.api.onfinality.io/public"
    );
    const web3Provider = new ethers.providers.Web3Provider(currentProvider);
    const contracts = new Contract(
      "0x000000003Ef267F9F977D1Ed564B9EC2378e4156",
      abi,
      web3Provider
    );
    const amount = await contracts.refferAmount(privateAddress);
    console.log(amount.toString());
    setFragmentAmount(amount.toString());
  };

  const checkAirdrop = async (privateAddress: string) => {
    const arrayList = [];
    const htmlobj = await axios.get("http://127.0.0.1:5173/airdrop_list.csv");
    const text = htmlobj.data;
    const textList = text.split(/[\n]/g);
    const count = textList ? textList.length : 0;
    setTextList(textList);
    checkAddress(privateAddress, textList);
    for (let i = 0; i < count; i++) {
      const newObject = {} as any;
      const unit = textList[i];
      const childList = unit.split(/,/g);
      newObject["account"] = childList[4];
      newObject["amount"] = BigNumber.from(childList[5] | 0);
      arrayList.push(newObject);
    }

    const tree = new BalanceTree(arrayList);
    console.log(tree, "tree");
    const hexRoot = tree.getHexRoot();
    setTree(tree);
    console.log(hexRoot);
  };
  const checkAddress = (address: string, list: any) => {
    const count = list ? list.length : 0;
    let bool = false;
    let amount = 0;
    console.log(list, "list");
    for (let i = 0; i < count; i++) {
      const unit = list[i];
      const childList = unit.split(/,/g);
      if (address == childList[4]) {
        const objectNew = {} as any;
        objectNew["index"] = childList[0];
        objectNew["address"] = childList[4];
        objectNew["amount"] = childList[5];
        amount = childList[5] | 0;
        setCurrentObj(objectNew);
        bool = true;
      }
      if (!bool) {
        const opts = {
          content: "Not In The Whitelist",
          duration: 3,
        };
        Toast.error(opts);
      } else {
        const opts = {
          content: "In Whitelist",
          duration: 3,
        };
        Toast.success(opts);
      }
      return bool;
    }
  };

  const transfer = async (address: any, amount: any) => {
    if (!walletWithProvider) {
      const opts = {
        content: "No wallet connected",
        duration: 3,
      };
      Toast.error(opts);
      return;
    }
    const contracts = new Contract(
      "0x000000003Ef267F9F977D1Ed564B9EC2378e4156",
      abi,
      walletWithProvider
    );
    try {
      const tx = await contracts.transferSynthesis(address, amount);
    } catch (error) {
      console.log(error);
      const opts = {
        content: "Transfer Error",
        duration: 3,
      };
      Toast.error(opts);
    }
  };

  const [mintAmount, setMintAmount] = useState(0);
  const [synthesisAmount, setSynthesisAmount] = useState(0);
  const [walletWithProvider, setWalletWithProvider] = useState(undefined);
  const [addressName, setAddressName] = useState("Connect Wallet");
  const [privateAddress, setPrivateAddress] = useState("");
  const [fragmentAmount, setFragmentAmount] = useState("0");
  const [currentObj, setCurrentObj] = useState({});
  const [tree, setTree] = useState({});
  const [textList, setTextList] = useState({});
  return (
    <>
      <Head connectWallet={connectWallet} addressName={addressName} />
      <Routes>
        <Route
          path="/"
          element={
            <Index connectWallet={connectWallet} addressName={addressName} />
          }
        />
        <Route
          path="/NFT"
          element={
            <About
              mint={mint}
              synthesisHandle={synthesisHandle}
              mintAmount={mintAmount}
              synthesisAmount={synthesisAmount}
              currentFragmentAmount={fragmentAmount}
              getFragmentAmount={getFragmentAmount}
              transfer={transfer}
              privateAddress={privateAddress}
            />
          }
        />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/agreemen" element={<Agreemen />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </>
  );
}

export default App;
