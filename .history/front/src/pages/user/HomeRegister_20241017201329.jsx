import { useLanguage } from "../../utils/LangConfig"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import DropdownLang from "../../components/DropdownLang"

import logo from '../../assets/icons/logo.png'

const HomeRegister = () => {
    const { t } = useLanguage()
    const navigate = useNavigate()

    return (
        <div className="overflow-y-hidden">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-y-hidden">
                <div className="mt-6 mx-12 flex justify-between">
                    <i className="pi pi-arrow-left cursor-pointer" onClick={() => navigate('/home')} title="Retour"></i>
                    <DropdownLang className="flex space-x-8 overflow-y-hidden" />
                </div>

                <main className="bg-white shadow-lg rounded flex justify-between mx-auto mt-8 w-[65%] h-[65vh]">
                    <section className="bg-greenCustom p-6">
                        <img src={logo} alt="Careera" className="w-64 h-52 flex justify-center items-center mx-auto mt-12 p-6 bg-white rounded-full" />
                    </section>

                    <section className="justify-center">
                        <h1 className="text-xl text-center font-semibold">{t('titleRegister')}</h1>
                        <p className="mt-4 text-center">{t('introRegister')}</p>
                    </section>
                </main>

            </motion.div>
        </div>
    )
}

export default HomeRegister