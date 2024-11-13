import { motion } from "framer-motion"
import DropdownLang from "../../components/DropdownLang"
import { useNavigate } from "react-router-dom"
import { Button } from "primereact/button"
import { Divider } from "primereact/divider"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"

import logo from '../../assets/icons/logo.png'
import { useLanguage } from "../../utils/LangConfig"
import { useState } from "react"

const EmailRegister = () => {
    const { t } = useLanguage()
    const navigate = useNavigate()

    const [nom, setNom] = useState('')

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-y-hidden" >
            <div className="mt-6 mx-12 flex justify-between">
                <i className="pi pi-arrow-left cursor-pointer" onClick={() => navigate('/home')} title={t('back')}></i>
                <DropdownLang className="flex space-x-8 overflow-y-hidden" />
            </div>

            <main className="bg-white shadow-lg rounded flex justify-normal mx-auto mt-10 w-[65%] h-[65vh]">
                <section className="bg-greenCustom p-6">
                    <img src={logo} alt="Careera" className="w-64 h-52 flex justify-center items-center mx-auto mt-12 p-6 bg-white rounded-full" />
                </section>

                <section className="flex flex-col justify-center mx-auto text-center">
                    <h1 className="text-2xl text-center font-semibold">{t('pRegister')}</h1>
                    <p className="-mt-2 text-center w-full px-20">{t('introEmailRegister')}</p>
                    <Button label={t('registerGoogle')} icon="pi pi-google ms-8" className="border border-none outlline outline-none mx-auto w-96 font-poppins text-sm mt-3 bg-blackCustom" />

                    <div className="relative mt-5 mx-auto">
                        <Divider className="w-[24rem]" />
                        <p className="text-slate-300 font-light text-lg absolute bg-white p-2 left-40 -top-6">{t('or')}</p>
                    </div>

                    <form className="mt-2 mx-auto">
                        <section className="flex flex-row">
                            <div className="p-inputgroup flex-1">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user"></i>
                                </span>
                                <FloatLabel>
                                    <InputText type="email" value={nom} onChange={(e) => setNom(e.target.value)} className="font-poppins text-sm" />
                                    <label htmlFor="email">{t('emailAddress')}</label>
                                </FloatLabel>
                            </div>

                            <div className="p-inputgroup flex-1">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user"></i>
                                </span>
                                <FloatLabel>
                                    <InputText type="email" value={prenom} onChange={(e) => setEmail(e.target.value)} className="font-poppins text-sm" />
                                    <label htmlFor="email">{t('emailAddress')}</label>
                                </FloatLabel>
                            </div>
                        </section>
                    </form>

                    <Button label={t('next')} className="border border-none outlline outline-none mx-auto w-96 font-poppins text-sm mt-20 bg-greenCustom" />
                </section>
            </main>
        </motion.div >
    )
}

export default EmailRegister