import { motion } from "framer-motion"
import DropdownLang from "../../components/DropdownLang"
import { useNavigate } from "react-router-dom"

const PasswordRegister = () => {
    const navigate = useNavigate()

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-y-hidden">
            <div className="mt-6 mx-12 flex justify-between">
                <i className="pi pi-arrow-left cursor-pointer" onClick={() => navigate('/home')} title={t('back')}></i>
                <DropdownLang className="flex space-x-8 overflow-y-hidden" />
            </div>

            <main className="bg-white shadow-lg rounded flex justify-normal mx-auto mt-10 w-[65%] h-[65vh]">
                <section className="bg-greenCustom p-6">
                    <img src={logo} alt="Careera" className="w-64 h-52 flex justify-center items-center mx-auto mt-12 p-6 bg-white rounded-full" />
                </section>

                <section className="flex flex-col justify-center mx-auto text-center">
                    <h1 className="text-2xl text-center font-semibold">{t('titleRegister')}</h1>
                    <p className="mt-2 text-center w-full px-20">{t('introRegister')}</p>
                    <Button label={t('begin')} onClick={() => navigate('/email-register')} className="border border-none outlline outline-none mx-auto w-96 font-poppins text-sm mt-20 bg-greenCustom" />
                </section>
            </main>

        </motion.div>
    )
}

export default PasswordRegister