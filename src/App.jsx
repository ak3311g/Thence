import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Homepage from './pages/homepage'
import Onboard from './pages/Onboard'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/onboard" element={<Onboard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
