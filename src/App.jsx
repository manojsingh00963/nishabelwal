// eslint-disable-next-line no-unused-vars
import React from 'react'
// import './App.css'
import { Outlet } from 'react-router-dom'

import { Header, Footer, MainProfile} from './Components'

function App() {
  return (
    <div className=' relative ' >
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
