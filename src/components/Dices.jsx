import React from 'react'
import { FaDice, FaDiceFive, FaDiceFour, FaDiceOne, FaDiceSix, FaDiceThree, FaDiceTwo } from 'react-icons/fa'
import {Button} from "@heroui/react";
import { useState } from 'react';
import { generateRandNr } from '../utils';

export const Dices = () => {
    const [nr, setnr] = useState(1)

    const diceComponents={
        1:<FaDiceOne size={100}/>,
        2:<FaDiceTwo  size={100}/>,
        3:<FaDiceThree  size={100}/>,
        4:<FaDiceFour size={100}/>,
        5:<FaDiceFive size={100}/>,
        6:<FaDiceSix size={100}/>,

    }

    return (
    <div className='flex items-center flex-col bg-blue-200 p3 max-w-3xl m-auto'>
        <h2>Dice roller</h2>
    <div>{diceComponents[nr]}</div>
        <Button onClick={()=>setnr(generateRandNr(1,6))}>roll dice</Button>
    </div>
)
}

export default Dices