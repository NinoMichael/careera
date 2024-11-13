import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/icons/logo.png'
import '../../styles/user/style.css'

const SplashScreen = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home')
        }, 5000)

        return () => clearTimeout(timer);
    }, [navigate])

    return (
        <main className="container flex justify-center items-center m-auto">
            <img src={logo} alt="Careera" className="w-64 h-52 container flex justify-center items-center m-auto heartbeat" />
        </main>
    )
}

export default SplashScreen