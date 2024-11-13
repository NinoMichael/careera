import React, { useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const SplashScreen = () => {
    const navigate = useNavigate()

    useEffect(() => {
        // Simuler un délai avant la navigation vers la page d'accueil
        const timer = setTimeout(() => {
            navigate('/home'); // Redirige vers la page d'accueil après 3 secondes
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate])

    return (
        <>
            <p>Chargement...</p>
        </>
    )
}

export default SplashScreen