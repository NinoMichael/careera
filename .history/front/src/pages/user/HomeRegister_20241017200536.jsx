import { useLanguage } from "../../utils/LangConfig"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import DropdownLang from "../../components/DropdownLang"

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

                <main className="bg-white shadow-lg rounded flex justify-between mx-auto mt-6">
                    <section className="bg-greenCustom">
                        <img src={logo} alt="Careera" />
                    </section>

                    <section className="px-12 py-4 justify-center">
                        <h1 className="text-xl text-center font-semibold">{t('titleRegister')}</h1>
                        <p className="mt-4 text-center">{t('introRegister')}</p>
                    </section>
                </main>

            </motion.div>
        </div>
    )
}

export default HomeRegister