import React from 'react'

import { useWeb3Hook } from '../hooks/useWeb3Hook'
import { Button, Space } from 'antd';

import {NETWORK}  from '../BC_config/netConfig'

function Home() {
  const {isConnect,isLoading,Connect,Disconnect,account} = useWeb3Hook();
  return (
    <div className ="home">
      <Button
        loading={isLoading}
        onClick = {()=>Connect()}
      >{
        isConnect
        ?'查看钱包'
        :'连接钱包'
      }</Button>
      <Button
      onClick = {()=>Disconnect()}
      >
        退出钱包
      </Button>
    </div>
  )
}

export default Home