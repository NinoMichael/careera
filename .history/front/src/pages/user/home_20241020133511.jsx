import { motion } from "framer-motion"
import MenuUser from "../../components/Menu"
import { useLanguage } from "../../utils/LangConfig"
import { Link } from "react-router-dom"
import { Button } from "primereact/button"
import { Card } from "primereact/card"

import '../../index.css'
import SearchBar from "../../components/SearchBar"
import promo from '../../assets/img-promo.png'
import linkedin from '../../assets/icons/linkedin.png'

import star from '../../assets/star.png'
import axian from '../../assets/axian.png'
import telma from '../../assets/telma.png'
import intelcia from '../../assets/intelcia.png'
import ingenosya from '../../assets/ingenosya.png'
import bni from '../../assets/bni.png'
import job from '../../assets/job.png'

const Home = () => {
    const { t } = useLanguage()

    const companies = [
        { id: 1, src: star },
        { id: 2, src: axian },
        { id: 3, src: telma },
        { id: 4, src: intelcia },
        { id: 5, src: ingenosya },
        { id: 6, src: bni },
    ]

    const reasons = [
        {
            id: 1,
            title: t('smartSearch'),
            text: t('smartSearchTxt'),
        },
        {
            id: 2,
            title: t('smartSearch'),
            text: t('smartSearchTxt'),
        },
        {
            id: 3,
            title: t('smartSearch'),
            text: t('smartSearchTxt'),
        },
        {
            id: 4,
            title: t('smartSearch'),
            text: t('smartSearchTxt'),
        }
    ]

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MenuUser />

            <main className="mt-5 mx-4">
                <header className="mx-2 bg-blackCustom grid grid-cols-2 py-6 px-24 rounded-lg">
                    <div className="mt-5 mb-10 mx-2">
                        <h1 className="font-poppins font-semibold text-start text-3xl text-white mt-2">{t('titleHome')}</h1>
                        <p className="mt-9 text-sm text-white w-[80%]">{t('introHome')}</p>

                        <SearchBar className="mt-16 flex flex-row space-x-3" />
                    </div>

                    <div className="relative mb-10">
                        <Link to="https://www.linkedin.com">
                            <img src={linkedin} className="absolute w-10 h-10 right-24 top-12 cursor-pointer z-10" alt="Linkedin" />
                        </Link>

                        <div className="relative bg-white rounded h-44 w-80 mt-32 mx-auto px-auto">
                            <img src={promo} width={400} height={400} alt="Promo" className="w-[150%] h-80 -ms-20 -mt-36" />
                        </div>

                        <div className="bg-greenCustom absolute flex flex-row space-x-2 justify-start p-2 rounded h-12 right-6 top-72">
                            <i className="pi pi-briefcase text-white mt-2"></i>
                            <div className="-mt-6">
                                <h6 className="text-slate-200 font-normal">{t('everyday')}</h6>
                                <p className="-mt-6 text-white">{t('totalJob')}</p>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="mt-16 mx-16">
                    <h1 className="text-center text-xl">{t('trusted')}</h1>

                    <div className="grid grid-cols-6 space-x-12 mt-12">
                        {companies.map((company) => (
                            <img key={company.id} src={company.src} alt="Company" className="w-28 h-24" />
                        ))}
                    </div>

                    <Button label={t('seeMore')} className="mt-12 flex justify-end items-end ml-auto font-poppins text-white text-sm bg-blackCustom border border-none outline outline-none px-12" />
                </section>

                <article className="mt-20 mx-16">
                    <h1 className="text-center text-xl">{t('whyChoose')}</h1>

                    <div className="grid grid-cols-[60%,40%] mt-9">
                        <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                            {reasons.map((reason) => (
                                <Card key={reason.id} className="bg-white border rounded font-poppins p-0">
                                    <h2 className="font-poppins text-base">{reason.title}</h2>
                                    <p className="text-xs">{reason.text}</p>
                                </Card>
                            ))}
                        </div>

                        <div className="bg-greenCustom shadow rounded p-16 mx-12">
                            <img src={job} alt="Job" className="w-72 h-64 mx-auto flex justify-center items-center" />
                        </div>
                    </div>
                </article>
            </main >
        </motion.div >
    )
}

export default Home