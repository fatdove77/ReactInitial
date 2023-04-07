import React from 'react'
import { motion } from 'framer-motion'
function Report() {
  return (
    <motion.div 
      style = {{padding:'1rem'}} 
      initial = {{opacity:0}}
      animate = {{opacity:1}}
      exit = {{opacity:1}}
      > 
      <div style = {{backgroundColor:'pink'}}>1</div>
    </motion.div>
  )
}

export default Report