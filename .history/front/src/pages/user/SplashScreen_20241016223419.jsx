import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const SplashScreen = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home')
        }, 5000)

        return () => clearTimeout(timer);
    }, [navigate])

    return (
        <>
            <p>Chargement...</p>
        </>
    )
}

export default SplashScreen