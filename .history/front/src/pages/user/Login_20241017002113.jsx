import { useState } from "react"
import { useLanguage } from "../../utils/LangConfig"
import { motion } from "framer-motion"
import MenuUser from "../../components/Menu"

import imgLogin from '../../assets/img-login.png'

const Login = () => {
    const { t } = useLanguage()
    const [email, setEmail] = useState('')
    const [mdp, setMdp] = useState('')

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MenuUser />

            <main className="flex justify-between items-center mx-auto mt-8 shadow-lg rounded w-[65%]">
                <section>
                    <img src={imgLogin} alt="Login" />
                </section>

                <section className="px-5 justify-center mx-auto">
                    <h1 className="text-xl font-semibold text-center">{t('titleLogin')}</h1>
                    <p className="mt-3 text-center">{t('introLogin')}</p>

                    <form className="mt-3">
                        <div className="p-inputgroup flex-1 mt-10 max-[530px]:w-80 max-[530px]:text-xs max-xs:w-72 max-[380px]:w-64">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-envelope"></i>
                            </span>
                            <FloatLabel>
                                <InputText type="email" value={emailvalue} onChange={(e) => emailSetValue(e.target.value)} className="font-poppins text-sm" />
                                <label htmlFor="email" className="custom-label">{t('emailAddress')}</label>
                            </FloatLabel>
                        </div>
                    </form>
                </section>
            </main>
        </motion.div>
    )
}

export default Login