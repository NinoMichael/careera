import './index.css'
import './App.css'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SplashScreen from './pages/user/SplashScreen'
import Home from './pages/user/home'
import Login from './pages/user/Login'
import HomeRegister from './pages/user/HomeRegister'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    window.addEventListener('beforeunload', handleStart)
    window.addEventListener('load', handleComplete)

    return () => {
      window.removeEventListener('beforeunload', handleStart)
      window.removeEventListener('load', handleComplete)
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        <body className='min-h-screen'>
          <BrowserRouter>
            {loading ? (
              <SplashScreen />
            ) : (
              <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home-register" element={<HomeRegister />} />
              </Routes>
            )}</BrowserRouter>

        </body>
      </AnimatePresence>
    </>
  )


}

export default App
