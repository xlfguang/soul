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
// import { Toast } from "@douyinfe/semi-ui";
import abi from "./abi/ido.json";
import axios from "axios";
import BalanceTree from "./tree/balance-tree";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    if(id != 1){
      var rpc = {
        chainId: "0x1",
        chainName: "Ethereum Mainnet",
        nativeCurrency: {
          name: "ETH",
          symbol: "ETH",
          decimals: 18,
        },
        rpcUrls: ["https://eth.llamarpc.com"],
        blockExplorerUrls: ["https://etherscan.io"],
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
    // if (id != 5) {
    //   const rpc = {
    //     chainId: "0x5",
    //     chainName: "Goerli",
    //     nativeCurrency: {
    //       name: "ETH",
    //       symbol: "ETH",
    //       decimals: 18,
    //     },
    //     rpcUrls: ["https://rpc.ankr.com/eth_goerli"],
    //     blockExplorerUrls: ["https://goerli.etherscan.io"],
    //   };
    //   windowNew.ethereum.request({
    //     method: "wallet_addEthereumChain",
    //     params: [
    //       {
    //         chainId: rpc.chainId,
    //         chainName: rpc.chainName,
    //         rpcUrls: [rpc.rpcUrls[0]],
    //         iconUrls: ["https://testnet.hecoinfo.com/favicon.png"],
    //         blockExplorerUrls: [rpc.blockExplorerUrls[0]],
    //         nativeCurrency: rpc.nativeCurrency,
    //       },
    //     ],
    //   });
    // }
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
      // const opts = {
      //   content: "No wallet connected",
      //   duration: 3,
      // };
      // Toast.error(opts);
      toast("No wallet connected", {
        type: "error",

        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    // const bools = checkAddress(privateAddress, textList);
    // if (!bools) {
    //   // const opts = {
    //   //   content: "Not In The Whitelist",
    //   //   duration: 3,
    //   // };
    //   // Toast.error(opts);
    //   // toast("Not In The Whitelist", {
    //   //   type: "error",

    //   //   position: "top-center",
    //   //   autoClose: 5000,
    //   //   hideProgressBar: false,
    //   //   closeOnClick: true,
    //   //   pauseOnHover: true,
    //   //   draggable: true,
    //   //   progress: undefined,
    //   //   theme: "light",
    //   // });
    //  // return;
    // }
    const contracts = new Contract(
      "0x00000000aF8c17Ac329fFb474466261338cFBd10",
      abi,
      walletWithProvider
    );
    let invinteAdr = window.location.hash.slice(6);
    console.log(window.location.hash);
    if (!invinteAdr) {
      invinteAdr = "0xb527517bCB218a38561a781b2e41f16D10077Cc9";
    }
    console.log(invinteAdr);
    try {
      const currentObj1 = currentObj as any;
      var proof0;
      try {
         proof0 = (tree as any).getProof(
          currentObj1.index | 0,
          currentObj1.address,
          BigNumber.from(currentObj1.amount | 0)
        );
      } catch (error) {
        proof0 = [];
        currentObj1.index = 0;
      }
    var gasLimit1 =  await contracts.estimateGas.smashEggs(proof0,
        currentObj1.index,
        amount,
        invinteAdr,
        { value: ethers.utils.parseUnits("0.01", "ether").mul(amount)});
        console.log(gasLimit1.toString(),"gasLimit")
      const tx = await contracts.smashEggs(
        proof0,
        currentObj1.index,
        amount,
        invinteAdr,
        { value: ethers.utils.parseUnits("0.01", "ether").mul(amount),gasLimit:gasLimit1.add(100000)}
      );
    } catch (error) {
      console.log(error);

      // Toast.error(opts);

      toast("Mint Error", {
        position: "top-center",
        type: "error",

        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const synthesisHandle = async (amount: any) => {
    if (!walletWithProvider) {
      // Toast.error(opts);
      toast("No wallet connected", {
        position: "top-center",
        type: "error",

        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const contracts = new Contract(
      "0x00000000aF8c17Ac329fFb474466261338cFBd10",
      abi,
      walletWithProvider
    );

    try {

      var gasLimit1 = await contracts.estimateGas.synthesisHandle(amount);
      await contracts.synthesisHandle(amount,{gasLimit:gasLimit1.add(100000)});
    } catch (error) {
      toast("Synthesis Error", {
        position: "top-center",
        type: "error",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const setSchedule1 = async () => {
    const currentProvider: any = new Web3.providers.HttpProvider(
      "https://eth.llamarpc.com"
    );
    const web3Provider = new ethers.providers.Web3Provider(currentProvider);
    const contracts = new Contract(
      "0x00000000aF8c17Ac329fFb474466261338cFBd10",
      abi,
      web3Provider
    );
    console.log(contracts);
    var amount = await contracts.mintSupply();
    var seli = (amount.toNumber() * 100) / 5000;
    console.log(seli);
    setMintAmount(seli.toFixed(5) as any);
    var amount = await contracts.synthesisSupply();
    var seli = (amount.toNumber() * 100) / 1000;
    console.log(seli);
    setSynthesisAmount(seli.toFixed(5) as any);
  };
  useEffect(() => {
    setSchedule1();
  }, []);
  const getFragmentAmount = async () => {
    if (!walletWithProvider) {
      // Toast.error(opts);
      toast("No wallet connected", {
        position: "top-center",
        type: "error",

        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const currentProvider: any = new Web3.providers.HttpProvider(
      "https://eth.llamarpc.com"
    );
    const web3Provider = new ethers.providers.Web3Provider(currentProvider);
    const contracts = new Contract(
      "0x00000000aF8c17Ac329fFb474466261338cFBd10",
      abi,
      web3Provider
    );
    const amount = await contracts.refferAmount(privateAddress);
    console.log(amount.toString());
    setFragmentAmount(amount.toString());
  };

  const checkAirdrop = async (privateAddress: string) => {
    const arrayList = [];
    const htmlobj = await axios.get("http://127.0.0.1:5174/airdrop_list.csv");
    const text = htmlobj.data;
    console.log(text);
    const textList = text.split(/[\r\n]+/g);
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
    console.log(arrayList, "arrayList");
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
    }
   
    if (!bool) {
      // Toast.error(opts);
      toast("Not In The Whitelist", {
        position: "top-center",
        type: "error",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(bool,"bool");
    } else {
      // Toast.success(opts);
      toast("In Whitelist", {
        position: "top-center",
        type: "success",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    return bool;
  };

  const transfer = async (address: any, amount: any) => {
    if (!walletWithProvider) {
      // Toast.error(opts);
      toast("No wallet connected", {
        position: "top-center",
        type: "error",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const contracts = new Contract(
      "0x00000000aF8c17Ac329fFb474466261338cFBd10",
      abi,
      walletWithProvider
    );
    try {
      const tx = await contracts.transferSynthesis(address, amount);
    } catch (error) {
      console.log(error);

      // Toast.error(opts);
      toast("Transfer Error", {
        position: "top-center",
        type: "error",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
     <ToastContainer />
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
