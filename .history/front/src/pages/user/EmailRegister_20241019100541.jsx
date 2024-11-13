import { motion } from "framer-motion"
import DropdownLang from "../../components/DropdownLang"
import { useNavigate } from "react-router-dom"
import { Button } from "primereact/button"
import { Divider } from "primereact/divider"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { Calendar } from "primereact/calendar"
import { Dialog } from 'primereact/dialog'

import logo from '../../assets/icons/logo.png'
import { useLanguage } from "../../utils/LangConfig"
import { useState } from "react"

const EmailRegister = () => {
    const { t } = useLanguage()
    const navigate = useNavigate()

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [birth, setBirth] = useState('')
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleBack = () => {
        navigate('/home')
    }

    const verifyEmail = (e) => {
        setLoading(true)
        setTimeout(() => {
            e.preventDefault()
            setLoading(false)
            setEmailInterface(true)
        }, 1500)
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-y-hidden" >
            <div className="mt-6 mx-12 flex justify-between">
                <i className="pi pi-arrow-left cursor-pointer" onClick={handleBack} title={t('back')}></i>
                <DropdownLang className="flex space-x-8 overflow-y-hidden" />
            </div>

            <main className="bg-white shadow-lg rounded flex justify-normal mx-auto mt-10 w-[65%] h-[75vh]">
                <section className="bg-greenCustom p-6 w-96">
                    <img src={logo} alt="Careera" className="w-64 h-52 flex justify-center items-center mx-auto mt-20 p-6 bg-white rounded-full" />
                </section>

                <section className="flex flex-col justify-center mx-auto text-center">
                    <h1 className="text-2xl text-center font-semibold">{t('pRegister')}</h1>
                    <p className="-mt-2 text-center w-full px-20">{t('introEmailRegister')}</p>
                    <Button label={t('registerGoogle')} icon="pi pi-google ms-8" className="border border-none outlline outline-none mx-auto w-96 font-poppins text-sm mt-3 bg-blackCustom" />

                    <div className="relative mt-5 mx-auto">
                        <Divider className="w-[24rem]" />
                        <p className="text-slate-300 font-light text-lg absolute bg-white p-2 left-40 -top-6">{t('or')}</p>
                    </div>

                    <form className="mt-5 mx-auto">
                        <section className="flex flex-row space-x-4 mx-20">
                            <div className="p-inputgroup flex-1">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user"></i>
                                </span>
                                <FloatLabel>
                                    <InputText value={nom} onChange={(e) => setNom(e.target.value)} className="font-poppins text-sm" />
                                    <label htmlFor="nom">{t('nameUser')}</label>
                                </FloatLabel>
                            </div>

                            <div className="p-inputgroup flex-1">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user"></i>
                                </span>
                                <FloatLabel>
                                    <InputText value={prenom} onChange={(e) => setPrenom(e.target.value)} className="font-poppins text-sm" />
                                    <label htmlFor="Prenom">{t('firstName')}</label>
                                </FloatLabel>
                            </div>
                        </section>

                        <section className="flex flex-row space-x-4 mx-20 mt-8">
                            <div className="p-inputgroup flex-1">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-calendar"></i>
                                </span>
                                <FloatLabel>
                                    <Calendar value={birth} onChange={(e) => setBirth(e.value)} className="font-poppins text-sm cursor-pointer" />
                                    <label htmlFor="birth">{t('birthDate')}</label>
                                </FloatLabel>
                            </div>

                            <div className="p-inputgroup flex-1">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-envelope"></i>
                                </span>
                                <FloatLabel>
                                    <InputText value={email} onChange={(e) => setEmail(e.target.value)} className="font-poppins text-sm" />
                                    <label htmlFor="email">{t('emailAddress')}</label>
                                </FloatLabel>
                            </div>
                        </section>

                        <Button label={t('next')} loading={loading} onClick={verifyEmail} className="border border-none outlline outline-none mx-auto w-96 font-poppins text-sm mt-10 mb-4 bg-greenCustom" />
                        <Dialog visible={emailInterface} modal onHide={() => { if (!emailInterface) return; setEmailInterface(false); }} className="w-[50%]">
                            <div className="mt-6 px-12">
                                <h3 className="font-kanit text-center text-lg mt-4">Veuillez vérifier votre boîte e-mail</h3>
                                <p className="text-center text-sm font-poppins mt-4">Nous avons envoyé un email à votre adresse tix@gmail.com. Veuillez vérifier et continuer votre inscription à partir du lien envoyé</p>
                            </div>

                            <p className="text-center text-xs font-poppins mt-4 mb-6 cursor-pointer text-red-600 hover:text-red-700">Vous n'avez pas reçu de code ?</p>
                        </Dialog>
                    </form>
                </section>
            </main>
        </motion.div >
    )
}

export default EmailRegister