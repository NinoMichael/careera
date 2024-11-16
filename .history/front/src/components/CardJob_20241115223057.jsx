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
            job: "Web Designer",
            location: "Antananarivo",
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
                        <p className='-mt-9 text-xl font-semibold font-kanit'>{job.job}</p>
                    </div>
                </div>

                <div className='mt-7'>
                    <i className='pi pi-bookmark'></i>
                </div>
            </section>

            <section className="grid grid-cols-3">
                <div className='bg-blackCustom text-white text-[0.65em] h-8 rounded'>
                    <p className='font-poppins'><i className='pi pi-map-marker mt-2 mx-1'></i>Antananarivo</p>
                </div>
            </section>

            <Divider />
        </>
    )

    const footer = () => {

    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {jobs.map((job) => (
                <Card key={job.id} header={() => header(job)} footer={footer} className='py-0 px-5'>

                </Card>
            ))}
        </div>
    )
}

export default CardJob
