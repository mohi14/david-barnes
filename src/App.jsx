

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './shared/Footer'
import Header from './shared/Header'
import Home from './pages/Home'
import Work from './pages/Work'
import Infos from './pages/Infos'
import ProjectDetails from './pages/ProjectDetails'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="/awards" element={<div>Comming soon</div>} />
        <Route path="/project-details/:slug" element={<ProjectDetails />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
