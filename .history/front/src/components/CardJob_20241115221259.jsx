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
        },
    ]

    const header = (job) => (
        <>
            <div className="flex flex-row items-center">
                <div>
                    <Avatar image={job.imgFirm} shape="circle" />
                </div>
                <div className="ml-4 -mt-3">
                    <h6 className="font-kanit text-[0.8em]">{job.firm}</h6>
                    <p className='-mt-7 text-base font-poppins'>Web Designer</p>
                </div>
            </div>
            <Divider />
        </>
    )

    const footer = () => {
        // Footer content can go here if needed
        return <div>Footer Content</div>
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {jobs.map((job) => (
                <Card key={job.id} header={() => header(job)} footer={footer} className='py-0 px-5'>
                    <h4 className="font-poppins">{job.title}</h4>
                </Card>
            ))}
        </div>
    )
}

export default CardJob
