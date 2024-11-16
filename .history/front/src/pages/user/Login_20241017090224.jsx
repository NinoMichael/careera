import { useState } from "react"
import { useLanguage } from "../../utils/LangConfig"
import { motion } from "framer-motion"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { Password } from "primereact/password"
import { Checkbox } from "primereact/checkbox"
import { Button } from "primereact/button"
import { Divider } from "primereact/divider"
import { Link, useNavigate } from "react-router-dom"

import imgLogin from '../../assets/img-login.png'

const Login = () => {
    const { t } = useLanguage()
    const [email, setEmail] = useState('')
    const [mdp, setMdp] = useState('')
    const [checked, setChecked] = useState(false)
    const navigate = useNavigate()

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mt-8 ms-12">
                <i className="pi pi-arrow-left cursor-pointer" onClick={() => navigate('/home')}></i>
            </div>

            <main className="flex justify-between mx-auto mt-4 shadow-lg rounded w-[65%] h-[77.5vh]">
                <section className="mt-4 bg-greenCustom">
                    <img src={imgLogin} alt="Login" />
                </section>

                <section className="px-12 py-4 justify-center">
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

                        <div className="flex justify-between space-x-20 mt-6 text-xs">
                            <div>
                                <Checkbox inputId="rememberMe" onChange={e => setChecked(e.checked)} checked={checked} />
                                <label htmlFor="rememberMe" className="ml-2">{t('rememberMe')}</label>
                            </div>

                            <Link to="/forgotten-password" className="mt-1">{t('mdpForgot')}</Link>
                        </div>

                        <Button label={t('login')} type="submit" className="bg-greenCustom text-white mt-10 font-poppins border border-none outline outline-none rounded py-2 w-full" />

                        <div className="relative mt-6">
                            <Divider className="w-[24rem]" />
                            <p className="text-slate-300 font-light text-lg absolute bg-white p-4 left-40 -top-3">{t('or')}</p>
                        </div>

                        <div className="mt-12 flex justify-center items-center mx-auto">
                            <Button label={t('googleSignin')} className="bg-blackCustom text-white text-center font-poppins text-sm rounded border border-none outline outline-none py-2 w-full"
                                icon="pi pi-google text-white ms-8" />
                        </div>

                        <p className="text-xs mt-8 text-center">{t('accountYet')} <Link to="/register-email" className="font-semibold">{t('registerLogin')}</Link></p>
                    </form>
                </section>
            </main>
        </motion.div>
    )
}

export default Login