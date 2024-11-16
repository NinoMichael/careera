import { motion } from "framer-motion"
import { useState } from "react"
import MenuUser from "../../components/Menu"
import { useLanguage } from "../../utils/LangConfig"
import { Link } from "react-router-dom"
import { Button } from "primereact/button"
import { Card } from "primereact/card"
import { Avatar } from "primereact/avatar"
import { AvatarGroup } from "primereact/avatargroup"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"

import '../../index.css'
import SearchBar from "../../components/SearchBar"
import promo from '../../assets/img-promo.png'
import recruiter from '../../assets/recruiter.png'
import linkedin from '../../assets/icons/linkedin.png'

import star from '../../assets/star.png'
import axian from '../../assets/axian.png'
import telma from '../../assets/telma.png'
import intelcia from '../../assets/intelcia.png'
import ingenosya from '../../assets/ingenosya.png'
import bni from '../../assets/bni.png'
import job from '../../assets/job.png'
import FooterUser from "../../components/FooterUser"

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

    const [email, setEmail] = useState('')

    const reasons = [
        {
            id: 1,
            icon: "pi pi-search me-3",
            title: t('smartSearch'),
            text: t('smartSearchTxt'),
        },
        {
            id: 2,
            icon: "pi pi-desktop me-3",
            title: t('navigation'),
            text: t('navigationTxt'),
        },
        {
            id: 3,
            icon: "pi pi-user me-3",
            title: t('recruitAccess'),
            text: t('recruitAccessTxt'),
        },
        {
            id: 4,
            icon: "pi pi-briefcase me-3",
            title: t('boostVisible'),
            text: t('boostVisibleTxt'),
        }
    ]

    const avatars = [
        { id: 1, src: "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png", label: "" },
        { id: 2, src: "https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png", label: "" },
        { id: 3, src: "https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png", label: "" },
        { id: 4, src: "https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png", label: "" },
        { id: 5, src: "https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png", label: "" },
        { id: 6, src: "", label: "+2" },
    ]

    const reviews = [
        {
            id: 1,
            user: 'Amy Elsner',
            job: 'Data scientist',
            img: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
            review: "Grâce à cette plateforme, j'ai trouvé un emploi correspondant parfaitement à mes compétences en moins de deux semaines. Le processus de candidature était simple et rapide. Les alertes personnalisées m'ont permis de ne manquer aucune opportunité",
        },
        {
            id: 2,
            user: 'Amy Elsner',
            job: 'Data scientist',
            img: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
            review: "Grâce à cette plateforme, j'ai trouvé un emploi correspondant parfaitement à mes compétences en moins de deux semaines. Le processus de candidature était simple et rapide. Les alertes personnalisées m'ont permis de ne manquer aucune opportunité",
        },
        {
            id: 3,
            user: 'Amy Elsner',
            job: 'Data scientist',
            img: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
            review: "Grâce à cette plateforme, j'ai trouvé un emploi correspondant parfaitement à mes compétences en moins de deux semaines. Le processus de candidature était simple et rapide. Les alertes personnalisées m'ont permis de ne manquer aucune opportunité",
        },
        {
            id: 4,
            user: 'Amy Elsner',
            job: 'Data scientist',
            img: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
            review: "Grâce à cette plateforme, j'ai trouvé un emploi correspondant parfaitement à mes compétences en moins de deux semaines. Le processus de candidature était simple et rapide. Les alertes personnalisées m'ont permis de ne manquer aucune opportunité",
        },
    ]

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MenuUser />

            <main className="mt-5">
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

                <article className="mt-20 mx-24">
                    <h1 className="text-center text-xl">{t('whyChoose')}</h1>

                    <div className="grid grid-cols-[60%,45%] mt-9">
                        <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                            {reasons.map((reason) => (
                                <Card key={reason.id} className="bg-white border rounded font-poppins p-0">
                                    <h2 className="font-poppins text-base"><i className={reason.icon}></i> {reason.title}</h2>
                                    <p className="text-xs">{reason.text}</p>
                                </Card>
                            ))}
                        </div>

                        <div className="bg-greenCustom shadow rounded p-16 mx-12">
                            <img src={job} alt="Job" className="w-72 h-64 mx-auto flex justify-center items-center" />
                        </div>
                    </div>
                </article>

                <section className="mt-24 mx-16">
                    <h1 className="text-center text-xl">{t('recruit')}</h1>

                    <div className="grid grid-cols-2 mt-10">
                        <div className="bg-blackCustom shadow rounded p-8 mx-16">
                            <div className="relative bg-white rounded h-44 w-80 mt-32 mx-auto px-auto">
                                <img src={recruiter} width={400} height={400} alt="Promo" className="w-[150%] h-80 -ms-20 -mt-36" />
                            </div>
                        </div>

                        <div>
                            <p className="mx-16 mt-6">{t('pRecruit')}</p>
                            <Button label={t('publishOffer')} className="bg-greenCustom mt-8 ms-16 font-poppins text-sm border border-none outline outline-none" />
                        </div>
                    </div>
                </section>

                <article className="mt-20 mx-24">
                    <h1 className="text-center text-xl">{t('reviewTitle')}</h1>
                    <p className="text-center">{t('pReview')}</p>

                    <div className="flex flex-row space-x-8 justify-center items-center mx-auto mt-8">
                        <AvatarGroup>
                            {avatars.map((avatar) =>
                                avatar.src == "" ? (
                                    <Avatar key={avatar.id} label={avatar.label} size="large" shape="circle" />
                                ) : (
                                    <Avatar key={avatar.id} image={avatar.src} size="large" shape="circle" />
                                ))}
                        </AvatarGroup>

                        <Button label={t('review')} className="bg-blackCustom font-poppins text-sm border border-none outline outline-none" />
                    </div>

                    <section className="mt-6 grid grid-cols-4 mx-6 gap-x-4">
                        {reviews.map((review) => (
                            <Card key={review.id} className="bg-white border rounded font-poppins p-0">
                                <p className="text-xs">{review.review}</p>
                                <div className="flex flex-row justify-start mt-5">
                                    <Avatar image={review.img} shape="circle" />

                                    <div className="ms-3 -mt-7">
                                        <h6>{review.user}</h6>
                                        <p className="text-[0.75em] -mt-6">{review.job}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </section>
                </article>

                <section className="mt-24 mx-40 bg-greenCustom shadow rounded text-white py-8 px-36">
                    <h1 className="text-center mt-6 text-2xl">{t('subscribeTitle')}</h1>
                    <p className="text-center">{t('subscribeTxt')}</p>

                    <div className="p-inputgroup flex-1 mt-12 w-[85%] justify-center items-center mx-auto">
                        <FloatLabel>
                            <InputText type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="font-poppins text-sm " />
                            <label htmlFor="email">{t('emailAddress')}</label>
                        </FloatLabel>
                        <Button label={t('search')} className="font-poppins text-sm bg-blackCustom border border-none outline outline-none px-4" />
                    </div>
                </section>
            </main>

            <FooterUser />
        </motion.div >
    )
}

export default Home