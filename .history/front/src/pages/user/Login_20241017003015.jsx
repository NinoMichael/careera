import { useState } from "react"
import { useLanguage } from "../../utils/LangConfig"
import { motion } from "framer-motion"
import MenuUser from "../../components/Menu"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { Password } from "primereact/password"

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

                        <div className="flex justify-between space-x-28 mt-4 text-xs max-[530px]:text-[0.7em] max-xs:space-x-20 max-[380px]:space-x-8">
                            <div>
                                <Checkbox inputId="rememberMe" onChange={e => setChecked(e.checked)} checked={checked} />
                                <label htmlFor="rememberMe" className="ml-2">{t('rememberMe')}</label>
                            </div>

                            <Link to="/forgotten-password" className="mt-1">{t('pwdForgot')}</Link>
                        </div>
                    </form>
                </section>
            </main>
        </motion.div>
    )
}

export default Login