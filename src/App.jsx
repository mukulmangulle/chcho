import React from 'react'
import Home from './screens/Home'
import Navbar2 from './container/Navbar2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Venchi from './screens/Venchi'
import Cadbury from './screens/Cadbury'
import KitKat from './screens/KitKat'
import RhineValley from './screens/RhineValley'
import Lindt from './screens/Lindt'
import Neuhaus from './screens/Neuhaus'
import Navbar from './container/Navbar'
import Whittaker from './screens/Whittaler'
import Ewedel from './screens/Ewedeliteam'
import Cart from './container/Cart'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Navbar2 />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/venchi' element={<Venchi />} />
          <Route path='/cadbury' element={<Cadbury />} />
          <Route path='/ewedel' element={<Ewedel />} />
          <Route path='/kitkat' element={<KitKat />} />
          <Route path='/rhinevalley' element={<RhineValley />} />
          <Route path='/lindt' element={<Lindt />} />
          <Route path='/neuhaus' element={<Neuhaus />} />
          <Route path='/whittaker' element={<Whittaker />} />

          <Route path='/Cart' element={<Cart />} />


        </Routes>
      </BrowserRouter>

    </>


  )
}

export default App