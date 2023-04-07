import React,{useState} from 'react'
import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { motion } from 'framer-motion';
function Person() {
  return (
    <motion.div 
    className="MT_container"
    initial = {{opacity:0}}
      animate = {{opacity:1}}
      exit = {{opacity:1}}
    >
      <div className="MT_topItem">
        person 
      </div>
      <div style = {{minWidth:'200px',backgroundColor:'pink'}}>
      xxx
      </div>
    </motion.div>
    
  )
}

export default Person