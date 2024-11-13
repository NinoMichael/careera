import { useLanguage } from "../../utils/LangConfig"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import DropdownLang from "../../components/DropdownLang"

import logo from '../../assets/icons/logo.png'
import { Button } from "primereact/button"

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

                <main className="bg-white shadow-lg rounded flex justify-normal mx-auto mt-10 w-[65%] h-[65vh]">
                    <section className="bg-greenCustom p-6">
                        <img src={logo} alt="Careera" className="w-64 h-52 flex justify-center items-center mx-auto mt-12 p-6 bg-white rounded-full" />
                    </section>

                    <section className="flex flex-col justify-center mx-auto text-center">
                        <h1 className="text-2xl text-center font-semibold">{t('titleRegister')}</h1>
                        <p className="mt-2 text-center w-full px-12">{t('introRegister')}</p>
                        <Button label={t('begin')} className="border border-none outlline outline-none mx-auto w-96 font-poppins text-sm mt-20 bg-greenCustom" />
                    </section>
                </main>

            </motion.div>
        </div>
    )
}

export default HomeRegister