

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './shared/Footer'
import Header from './shared/Header'
import Home from './pages/Home'
import Work from './pages/Work'
import Infos from './pages/Infos'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/infos" element={<Infos />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
