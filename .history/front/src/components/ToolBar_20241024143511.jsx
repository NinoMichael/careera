import { Toolbar } from "primereact/toolbar"
import { Avatar } from "primereact/avatar"
import { useLanguage } from "../utils/LangConfig"

const ToolBar = () => {
    const { language, switchLanguage } = useLanguage()

    const langOptions = [
        { name: 'Français', code: 'FR' },
        { name: 'English', code: 'EN' },
        { name: 'Malagasy', code: 'MG' },
    ]

    const handleLanguageChange = (e) => {
        switchLanguage(e.value);
    }


    const centerContent = (
        <div className="space-x-6">
            <div className="space-x-6 mt-2">
                <i className="pi pi-bell text-white cursor-pointer"></i>
                <i className="pi pi-cog text-white cursor-pointer"></i>
            </div>

            <Avatar image={'https://primefaces.org/cdn/primereact/mages/avatar/amyelsner.png'} size="large" shape="circle" />
        </div>
    )

    const endContent = (
        <div>
            <span><i className="pi pi-globe text-white"></i></span>
        </div>
    )

    return (
        <>
            <header className="mt-4 flex justify-end bg-greenCustom h-[4.75rem]">
                <Toolbar center={centerContent} end={endContent} className="bg-greenCustom border border-none outline outline-none" />
            </header >
        </>
    )
}

export default ToolBar