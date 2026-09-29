import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Dices from './components/Dices'
import { Programs } from './components/Programs'
import {Button, ButtonGroup} from "@heroui/react";
import { MyTodos } from './components/MyTodos'


function App() {
  const [selected,setselected] = useState('programs')
  
  //const nap='kedd'
  //const nr=10
  return (
   <div>
    <h1 className='text-center font-bold text-3xl '>My first app</h1>
   <div className='flex flex-col items-center gap-6 p-10'>
     <ButtonGroup variant="primary">
          <Button onClick={()=>setselected('counter')} 
          className={selected=='counter'?'bg-indigo-200 text-indigo-700':'text-indigo-200 bg-indigo-700'}>Counter </Button>
          <Button onClick={()=>setselected('dices')}
            className={selected=='dices'?'bg-indigo-200 text-indigo-700':'text-indigo-200 bg-indigo-700'}>
            <ButtonGroup.Separator />
            Dice Roller
          </Button>
          <Button onClick={()=>setselected('programs')}
            className={selected=='programs'?'bg-indigo-200 text-indigo-700':'text-indigo-200 bg-indigo-700'}>
            <ButtonGroup.Separator />
            Programs
          </Button>
        </ButtonGroup>
        <Button onClick={()=>setselected('todo')}
          className={selected=='todo'?'bg-indigo-200 text-indigo-700':'text-indigo-200 bg-indigo-700'}>Todo</Button>
   </div>
   {/*  <p>Ma {nap} van. </p>
    <p>A szám {nr%2==0 ? 'páros':'Páratlan'}</p> */}

   { selected=='counter' &&<Counter/>}
   { selected=='dices' &&<Dices/>}   
   { (selected=='programs' || ! selected) &&<Programs/>}
   { selected=='todo' &&<MyTodos/>}   
   </div>
    
  )
}

export default App
