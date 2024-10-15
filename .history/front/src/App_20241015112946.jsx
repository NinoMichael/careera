import './App.css'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

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
      {loading}
      <AnimatePresence>
        <body className='min-h-screen'>

        </body>
      </AnimatePresence>
    </>
  )


}

export default App
