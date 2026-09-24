import React from 'react'
import { useState } from 'react';
import { BsCursor } from 'react-icons/bs';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { RiResetLeftFill } from "react-icons/ri";
import {Button} from "@heroui/react";
import { Myimage } from './Myimage';



export const Counter = () => {
    const[counter,setCounter]=useState(0)

    const h2Style={
        textAlign:"center",
        color:"blue"
    }
    const btnmisStyle={
        opacity:counter<-5? 0.4:1,
        cursor:counter<=-5?'not allowed': 'pointer',
        background:'transparent'
    }
const numcolor ={
    color:counter<0?'red':'green'

}
  return (
    <div>
        <h2 style={h2Style}>My counter components</h2>
        <div className='counter'>
            <button onClick={()=>setCounter(prev=>prev-1)}disabled={counter<=-5}>
                <CiCircleMinus size={48} color='red'/>
            </button>

        <div className='nr' style={numcolor}>{counter}</div>


            <button onClick={()=>setCounter(prev=>prev+1)}disabled={counter>=5}>
                <CiCirclePlus size={48} color='red'/>
                </button>
        
        <Button size='10xl' onClick={()=>setCounter(0)}>reset</Button>
        </div>
        {counter>0 && <Myimage counter={counter} maiNap="szerda"/>}
    </div>
  )
}

export default Counter