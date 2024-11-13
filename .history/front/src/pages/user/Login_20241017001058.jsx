import { useLanguage } from "../../utils/LangConfig"
import { motion } from "framer-motion"
import MenuUser from "../../components/Menu"

import imgLogin from '../../assets/img-login.png'

const Login = () => {
    const { t } = useLanguage()

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MenuUser />

            <main className="flex justify-between items-center mx-auto mt-8 shadow-lg rounded w-[65%]">
                <section>
                    <img src={imgLogin} alt="Login" />
                </section>

                <section className="py-4 px-5 justify-center mx-auto items-center">
                    <h1>{t('titleLogin')}</h1>
                </section>
            </main>
        </motion.div>
    )
}

export default Login