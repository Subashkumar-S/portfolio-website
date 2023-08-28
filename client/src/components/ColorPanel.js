import React, { useState } from 'react'
import {FiSettings} from "react-icons/fi"
import { useTheme } from './ThemeContext';


const ColorPanel = () => {
  const { changeColor } = useTheme();
  const [ open, setOpen ] = useState(false);
  const handleToggle = () =>{
    setOpen(!open);
  }
  console.log(open);

  return (
    <div className={`fixed top-1/2  z-10  flex ${open ? 'right-0' : '-right-20'} transition-all duration-700 ease-in-out`}>
        <button className='w-10 h-10 text-3xl bg-primary-white flex items-center justify-center ' onClick={handleToggle}> <FiSettings className='animate-spin duration-700'/></button>
        <div className='bg-active-white w-20 h-20 flex flex-wrap'>
            <button className='w-8 h-8 bg-pink m-1 rounded-md' onClick={() =>changeColor('pink')} ></button>
            <button className='w-8 h-8 bg-blue m-1 rounded-md' onClick={() =>changeColor('blue')} ></button>
            <button className='w-8 h-8 bg-purple m-1 rounded-md' onClick={() =>changeColor('purple')} ></button>
            <button className='w-8 h-8 bg-orange m-1 rounded-md' onClick={() =>changeColor('orange')}></button>
        </div>
    </div>
  )
}

export default ColorPanel