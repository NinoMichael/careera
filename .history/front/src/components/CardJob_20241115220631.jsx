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
        }
    ]

    const header = (job) => {
        <>
            <div className="flex flex-row">
                <div>
                    <Avatar image={job.imgFirm} shape='circle' size="large" />
                </div>

                <div>
                    <h5 className="font-poppins text-sm">{job.firm}</h5>
                </div>
            </div >

            <Divider />
        </>
    }

    const footer = () => {

    }

    return (
        <div className="grid grid-cols-3">
            {jobs.map((job) => (
                <Card key={job.id} header={header} footer={footer}>

                </Card>
            ))}
        </div>
    )
}

export default CardJob