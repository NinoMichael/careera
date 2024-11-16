import intelcia from '../assets/intelcia.png'
import { Card } from 'primereact/card'

const CardJob = () => {
    const jobs = [
        {
            id: 1,
            title: "Web Designer",
            firm: "Aketech Agency",
            imgFirm: intelcia,
        }
    ]

    const header = () => {
        <div className="flex flex-roW">

        </div>
    }

    const footer = () => {

    }

    return (
        <>
            {jobs.map((job) => (
                <Card key={job.id} header={header} footer={footer}>

                </Card>
            ))}
        </>
    )
}

export default CardJob