import intelcia from '../assets/intelcia.png'
import { Card } from 'primereact/card'
import { Avatar } from 'primereact/avatar'
import { Divider } from 'primereact/divider'

const CardJob = () => {
    const jobs = [
        {
            id: 1,
            title: "Web Designer",
            firm: "Aketech Agency",
            imgFirm: intelcia,
            location: "Antananarivo",
            typeJob: "Emploi",
            typeContract1: "CDD",
            typeContract2: "Local",
            description: "Basé à Antananarivo, ce poste offre l'opportunité de travailler sur des projets variés pour des clients de renom. Intégrez une entreprise en pleine croissance, où votre talent sera valorisé et votre carrière sera .....",
        },
    ]

    const header = (job) => (
        <>
            <section className="flex flex-row justify-between">
                <div className="flex flex-row items-center">
                    <div>
                        <Avatar image={job.imgFirm} shape="circle" />
                    </div>
                    <div className="ml-4 -mt-3">
                        <h6 className="font-poppins font-normal text-[0.8em]">{job.firm}</h6>
                        <p className='-mt-9 text-xl font-semibold font-kanit'>{job.title}</p>
                        <p className='-mt-5 font-poppins font-normal text-[0.7em]'><i className="pi pi-map-marker me-1"></i>{job.location}</p>
                    </div>
                </div>

                <div className='mt-7'>
                    <i className='pi pi-bookmark cursor-pointer' title="Enregistrer l'annonce"></i>
                    <i className='pi pi-ellipsis-v cursor-pointer ms-5' title="Option"></i>
                </div>
            </section>

            <section className="grid grid-cols-3 space-x-4 mt-3 ms-4">
                <div className='bg-blackCustom text-white text-[0.65em] h-7 rounded w-20'>
                    <p className='mt-1 font-poppins text-center '>{job.typeJob}</p>
                </div>
                <div className='bg-blackCustom text-white text-[0.65em] h-7 rounded w-16'>
                    <p className='mt-1 font-poppins text-center'>{job.typeContract1}</p>
                </div>
                <div className='bg-blackCustom text-white text-[0.65em] h-7 rounded w-16'>
                    <p className='mt-1 font-poppins text-center'>{job.typeContract2}</p>
                </div>
            </section>

            <Divider />
        </>
    )

    const footer = (job) => {
        <>
            <section className="flex flex-row justify-between">
                <div>
                    <p className="text-[0.7em] font-poppins"><i className="pi pi-clock me-2"></i>14 novembre</p>
                </div>
            </section>
        </>
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {jobs.map((job) => (
                <Card key={job.id} header={() => header(job)} footer={() => footer(job)} className='py-0 px-5'>
                    <div className='h-20 -mt-8'>
                        <p className='text-xs font-poppins'>{job.description}</p>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default CardJob
