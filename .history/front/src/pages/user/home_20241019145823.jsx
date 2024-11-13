import { motion } from "framer-motion"
import MenuUser from "../../components/Menu"
import { useLanguage } from "../../utils/LangConfig"

import '../../index.css'

const Home = () => {
    const { t } = useLanguage()

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MenuUser />

            <main className="mt-5 mx-4">
                <header className="mx-2 bg-blackCustom grid grid-cols-2 py-6 px-12 rounded-lg">
                    <div>
                        <h1 className="font-poppins font-semibold text-start text-3xl text-white mt-2">{t('titleHome')}</h1>
                        <p className="mt-9 text-sm text-white w-[80%]">{t('introHome')}</p>
                    </div>
                </header>
            </main>
        </motion.div>
    )
}

export default Home