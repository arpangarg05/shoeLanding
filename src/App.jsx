import { useState } from 'react'

import ColourBar from './ColorNav'
import './App.css'
import NavBar from './NavBar'
import Page from './Page'
import ContactUs from './Contact Page/ContactUs'

function App() {
  const [colour, setColour] = useState("")
  document.getElementsByTagName("body")[0].style.backgroundColor = colour

  const changeColour = (e)=>{
    return setColour(e)
  }

  
  return (
    <>
    <div className=' w-full h-svh'>
      <NavBar></NavBar>
      <div className='flex justify-center'>

      <Page></Page>
      </div>
      <ContactUs />
    </div> 
    </>
  )
}

export default App
