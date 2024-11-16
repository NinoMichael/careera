import { Button } from "primereact/button"
import { Dialog } from "primereact/dialog"
import { Avatar } from "primereact/avatar"
import PropTypes from "prop-types"

import { Divider } from "primereact/divider"
import LongText from "./LongText"

import axian from "../assets/axian.png"
import telma from "../assets/telma.png"

const FirmDialog = ({ visibleFirm, setVisibleFirm, firmSelected, setFirmSelected }) => {
    const description = "Axian Group est une entreprise informatique leader dans les services numériques, apportant des solutions innovantes pour transformer la manière dont les entreprises travaillent et interagissent avec leurs clients. Nous sommes présents dans plusieurs pays, offrant des infrastructures solides et une expertise unique pour répondre aux défis du futur numérique."

    const firms = [
        {
            id: 1,
            nom: "Telma Madagascar",
            location: "Andraharo, Antananarivo 101",
            img: telma
        },
        {
            id: 2,
            nom: "Telma Madagascar",
            location: "Andraharo, Antananarivo 101",
            img: telma
        },
        {
            id: 3,
            nom: "Telma Madagascar",
            location: "Andraharo, Antananarivo 101",
            img: telma
        },
    ]

    return (
        <Dialog visible={visibleFirm} className="pt-4 pb-6 px-6 rounded bg-white h-[85vh] w-[60vw] overflow-y-auto"
            onHide={() => { if (!visibleFirm) return; setVisibleFirm(false) }}
            content={({ hide }) => (
                <>
                    <div onClick={(e) => hide(e)}>
                        <i className="pi pi-arrow-left hover:text-greenCustom cursor-pointer" title="Sortir"></i>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row justify-start space-x-4 ms-6 mt-3">
                            <Avatar image={axian} shape="circle" size="large" />

                            <div className="-mt-4">
                                <h4 className="font-kanit">Group Axian</h4>
                                <p className="font-poppins text-xs -mt-5">La compagnie à votre service</p>
                            </div>
                        </div>

                        <Button label="Contacter" icon="pi pi-phone" className="mt-4 font-poppins text-xs text-white border border-none outline outline-none bg-greenCustom h-8" />
                    </div>

                    <div className="grid grid-cols-3 ms-20 -mt-4">
                        <div>
                            <h6 className="font-normal text-slate-400 font-poppins"><i className="pi pi-map-marker me-2"></i>Localisation</h6>
                            <p className="-mt-6 font-poppins text-xs">Andraharo, Antananarivo 101</p>
                        </div>

                        <div>
                            <h6 className="font-normal text-slate-400 font-poppins"><i className="pi pi-briefcase me-2"></i>Type de société</h6>
                            <p className="-mt-6 font-poppins text-xs">SARL</p>
                        </div>

                        <div>
                            <h6 className="font-normal text-slate-400 font-poppins"><i className="pi pi-briefcase me-2"></i>Domaine</h6>
                            <p className="-mt-6 font-poppins text-xs">Informatique</p>
                        </div>
                    </div>

                    <Divider />

                    <section className="grid grid-cols-2 mx-6 -mt-4 space-x-8">
                        <div>
                            <article>
                                <h5 className="font-poppins">A propos de Axian Group</h5>
                                <LongText text={description} />
                            </article>

                            <div className="mt-10">
                                <h4 className="font-poppins">Les offres d'emploi de Axian Group</h4>
                            </div>
                        </div>

                        <div className="">
                            <h4 className="font-poppins">Voir d'autres d'entreprises</h4>

                            <div className="bg-white rounded shadow-lg p-4">
                                {firms.map((firm) => (
                                    <div key={firm.id} className="flex flex-row justify-between mb-5">
                                        <div className="-mt-6">
                                            <h5 className="font-poppins">{firm.nom}</h5>
                                            <p className="-mt-6 font-poppins text-xs">{firm.location}</p>
                                        </div>

                                        <Avatar image={firm.img} shape="circle" />
                                    </div>
                                ))}

                            </div>
                        </div>
                    </section>
                </>
            )}>

        </Dialog>
    )
}

FirmDialog.propTypes = {
    visibleFirm: PropTypes.bool.isRequired,
    setVisibleFirm: PropTypes.func.isRequired,
    firmSelected: PropTypes.object.isRequired,
    setFirmSelected: PropTypes.func.isRequired
}

export default FirmDialog