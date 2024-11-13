import { useState } from "react"
import { useLanguage } from "../../utils/LangConfig"
import { motion } from "framer-motion"
import MenuUser from "../../components/Menu"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { Password } from "primereact/password"
import { Checkbox } from "primereact/checkbox"
import { Link } from "react-router-dom"

import imgLogin from '../../assets/img-login.png'

const Login = () => {
    const { t } = useLanguage()
    const [email, setEmail] = useState('')
    const [mdp, setMdp] = useState('')
    const [checked, setChecked] = useState(false)

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

                    <form className="mt-8">
                        <div className="p-inputgroup flex-1">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-envelope"></i>
                            </span>
                            <FloatLabel>
                                <InputText type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="font-poppins text-sm" />
                                <label htmlFor="email">{t('emailAddress')}</label>
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

                        <div className="flex justify-between space-x-20 mt-4 text-xs">
                            <div>
                                <Checkbox inputId="rememberMe" onChange={e => setChecked(e.checked)} checked={checked} className="border" />
                                <label htmlFor="rememberMe" className="ml-2">{t('rememberMe')}</label>
                            </div>

                            <Link to="/forgotten-password" className="mt-1">{t('mdpForgot')}</Link>
                        </div>
                    </form>
                </section>
            </main>
        </motion.div>
    )
}

export default Login