import React,{useState,useEffect} from 'react'
import { injected } from '../BC_config/connector';
import {NETWORK} from '../BC_config/netConfig';
import cogoToast from 'cogo-toast';
import { useWeb3React } from "@web3-react/core"
import Web3 from 'web3';
import { Spin } from 'antd';
import { useSplitBalance,useBalance } from '../hooks/static';
function Home() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React();
  const [isConnect,setIsConnect] = useState(false);  //是否连接 控制按钮内样式
  const [isLoading,setIsLoading] = useState(false); //正在连接中  显示缓冲图标
  const [w3,setW3] = useState();
  const split = useSplitBalance();
  const {fibo,usdt} = useBalance();
  console.log(split);
  useEffect(()=>{
    let account = localStorage.getItem("currentAccount");
    if(account!=null)
    Connect()
  },[])

  async function Connect(){
    if(window.ethereum!==undefined){
      setIsLoading(true);
      let chainId = NETWORK.chainId;
      let chainName = NETWORK.chainName;
      let rpcUrls = NETWORK.rpcUrls;
      console.log(window.ethereum.chainId);
      if(window.ethereum.chainId=='12306'){
        //连接别的钱包
      }
      else {
        try {
          await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{chainId}],
          });
      } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
              try {
                  await window.ethereum.request({
                      method: 'wallet_addEthereumChain',
                      params: [
                          {
                              chainId,
                              chainName,
                              rpcUrls /* ... */,
                          },
                      ],
                  });
              } catch (addError) {
                  // handle "add" error
                  cogoToast.error("连接出错",addError);
                  setIsLoading(false);
                  // cogoToast.error("Connection error",addError);
              }
          }
        }
      }

      const web3 = new Web3(window.ethereum);
      setW3(web3);
      //连接钱包
      try{
        await window.ethereum.enable().then((res)=>{
          localStorage.setItem("currentAccount",res[0]);
        })
        activate(injected)
        setIsConnect(true);
      }catch(e){

      }
      finally{
        setIsLoading(false);
      }

      // let account = localStorage.getItem("currentAccount");
      // console.log(account);
    }
    else {
      cogoToast("请下载钱包")
      
    }
  }

  async function Disconnect() {
    try {
      localStorage.removeItem("currentAccount");
      let currentAccount =  localStorage.getItem("currentAccount");
      window.location.reload();
    } catch (ex) {
        cogoToast.error("退出钱包错误",ex);
  }
}

  return (
    <div>
      <button onClick = {Connect}>{
        isLoading
        ?<Spin></Spin>
        :isConnect
          ?"查看钱包"
          :"连接钱包"
      }</button>

      <button onClick = {Disconnect}> 退出钱包</button><br></br>
      <span>{split}</span> <br></br>
      <span>{usdt}</span><br></br>
      <span>{fibo}</span>
    </div>
  )
}


export default Home