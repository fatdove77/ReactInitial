import React,{useState} from 'react'
import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';

import useThrottle  from '../hooks/useThrottle.ts';
function Person() {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  const handleClick = (index)=>{
    console.log(index);
    click(index);
  }

  const click = useThrottle((index)=>{
    console.log(index);
  },setLoadings,2000)
  return (
    <div>

        <Button 
        type="primary" 
        loading={loadings[0]} 
        onClick={() => handleClick(0)}
        style = {{backgroundColor:'pink'}}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
          style = {{backgroundColor:'pink'}}
        >
          Click me!
        </Button>
    </div>
  )
}

export default Person