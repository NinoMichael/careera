import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/icons/logo.png'

const SplashScreen = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home')
        }, 5000)

        return () => clearTimeout(timer);
    }, [navigate])

    return (
        <main className="container">
            <img src={logo} alt="Careera" className="w-64 h-48" />
        </main>
    )
}

export default SplashScreen