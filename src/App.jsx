import { useState } from 'react'

import './App.css'
import NavBar from './NavBar'
import Page from './Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' bg-white w-full h-svh'>
      <NavBar></NavBar>
      <div className='flex justify-center h-1/2'>

      <Page></Page>
      </div>
    </div> 
    </>
  )
}

export default App
