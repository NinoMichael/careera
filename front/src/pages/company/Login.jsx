import { useState } from "react"
import { useLanguage } from "../../utils/LangConfig"
import { motion } from "framer-motion"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { Password } from "primereact/password"
import { Button } from "primereact/button"
import { useNavigate } from "react-router-dom"

import imgLogin from '../../assets/img-login.png'
import DropdownLang from "../../components/user/DropdownLang"

const LoginCompany = () => {
    const { t } = useLanguage()
    const [identifiant, setIdentifiant] = useState('')
    const [mdp, setMdp] = useState('')

    const navigate = useNavigate()

    return (
        <div className="overflow-y-hidden">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-y-hidden">
                <DropdownLang className="space-x-8 overflow-y-hidden flex justify-end mt-8 me-6" />

                <main className="flex justify-between mx-auto mt-12 shadow-lg rounded w-[65%] h-[65vh]">
                    <section className="mt-4 bg-greenCustom w-96">
                        <img src={imgLogin} alt="Login" className="w-64 h-52 mx-auto items-center flex justify-center mt-32" />
                    </section>

                    <section className="pe-24 pt-12 py-4 justify-center">
                        <h1 className="text-xl font-semibold text-center">{t('titleLogin')}</h1>
                        <p className="mt-3 text-center">{t('introLogin')}</p>

                        <form className="mt-8">
                            <div className="p-inputgroup flex-1">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-envelope"></i>
                                </span>
                                <FloatLabel>
                                    <InputText value={identifiant} onChange={(e) => setIdentifiant(e.target.value)} className="font-poppins text-sm" />
                                    <label htmlFor="identifiant">{t('username')}</label>
                                </FloatLabel>
                            </div>

                            <div className="p-inputgroup flex-1 mt-7">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-lock"></i>
                                </span>
                                <FloatLabel>
                                    <Password value={mdp} onChange={(e) => setMdp(e.target.value)} className="font-poppins text-sm" />
                                    <label htmlFor="password">{t('password')}</label>
                                </FloatLabel>
                            </div>

                            <Button label={t('login')} type="submit" className="bg-greenCustom text-white mt-12 font-poppins border border-none outline outline-none rounded py-2 w-full"
                                onClick={() => navigate('/dashboard-company')} />
                        </form>
                    </section>
                </main>
            </motion.div>
        </div>

    )
}

export default LoginCompany