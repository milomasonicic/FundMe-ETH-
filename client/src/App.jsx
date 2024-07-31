import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wallet from './Wallet'
import Hero from './Hero'

export default function App() {
  return (
    <div className='bg-gradient-to-r from-yellow-100 via-green-100 via-blue-300 via-purple-400 to-orange-400 h-[1100px]'>
       
         <Hero></Hero>
         <div className='px-4'>
         <  Wallet></Wallet>
         </div>
    </div>
  )
}
