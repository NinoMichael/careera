import { motion } from "framer-motion"
import MenuUser from "../../components/Menu"
import { useLanguage } from "../../utils/LangConfig"

import '../../index.css'

const Home = () => {
    const { t } = useLanguage

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MenuUser />

            <main className="mt-5 mx-4">
                <header className="mx-2 bg-blackCustom grid grid-cols-2 py-2 px-3 rounded-lg">
                    <div>
                        <h1 className="font-poppins font-semibold text-start text-3xl text-white">{t('titleHome')}</h1>
                    </div>
                </header>
            </main>
        </motion.div>
    )
}

export default Home