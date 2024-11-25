import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className='Heading'> 
      <h1>Pecahkan Masalahmu,Tingkatkan Prestasimu</h1>
      <h2>Bersama Pitutor, kami siap memberikan solusi terbaik dalam menunjang prestasi akademik untuk masa depan yang lebih baik. </h2>
    </div>
    <Footer/>
    </>
    
  )
}

export default App
