import { motion } from "framer-motion"
import MenuUser from "../../components/Menu"
import { useLanguage } from "../../utils/LangConfig"

import '../../index.css'
import SearchBar from "../../components/SearchBar"
import promo from '../../assets/img-promo.png'

const Home = () => {
    const { t } = useLanguage()

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MenuUser />

            <main className="mt-5 mx-4">
                <header className="mx-2 bg-blackCustom grid grid-cols-2 py-6 px-24 rounded-lg">
                    <div className="mt-5 mb-10 mx-2">
                        <h1 className="font-poppins font-semibold text-start text-3xl text-white mt-2">{t('titleHome')}</h1>
                        <p className="mt-9 text-sm text-white w-[80%]">{t('introHome')}</p>

                        <SearchBar className="mt-16 flex flex-row space-x-3" />
                    </div>

                    <div className="relative bg-white rounded h-44 w-80 mt-32 mx-auto px-auto">
                        <img src={promo} width={400} height={400} alt="Promo" className="w-[150%] h-80 me-4 -mt-36" />
                    </div>
                </header>
            </main>
        </motion.div>
    )
}

export default Home