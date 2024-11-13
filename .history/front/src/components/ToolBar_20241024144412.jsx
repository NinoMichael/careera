import { Toolbar } from "primereact/toolbar"
import { Avatar } from "primereact/avatar"
import { Dropdown } from "primereact/dropdown"
import { useLanguage } from "../utils/LangConfig"

const ToolBar = () => {
    const { language, switchLanguage } = useLanguage()

    const langOptions = [
        { name: 'Français', code: 'FR' },
        { name: 'English', code: 'EN' },
        { name: 'Malagasy', code: 'MG' },
    ]

    const handleLanguageChange = (e) => {
        switchLanguage(e.value)
    }


    const centerContent = (
        <div className="space-x-24">
            <div className="space-x-6 mt-2">
                <i className="pi pi-bell text-white cursor-pointer"></i>
                <i className="pi pi-cog text-white cursor-pointer"></i>
            </div>

            <div className="flex items-center space-x-3 -mt-6 ms-12">
                <i className="pi pi-globe text-white"></i>
                <Dropdown value={language} options={langOptions} onChange={handleLanguageChange} optionLabel="code"
                    placeholder={language} panelClassName="font-poppins text-xs" className="text-white bg-transparent border-none p-0 outline-none"
                />
            </div>

        </div>
    )

    const endContent = (
        <div>
            <Avatar image={'https://primefaces.org/cdn/primereact/mages/avatar/amyelsner.png'} className="-mt-12" size="large" shape="circle" />
        </div>
    )


    return (
        <>
            <header className="mt-4 flex justify-end pe-6 bg-greenCustom h-[4.75rem]">
                <Toolbar center={centerContent} end={endContent} className="bg-greenCustom border border-none outline outline-none" />
            </header >
        </>
    )
}

export default ToolBar