import { Toolbar } from "primereact/toolbar"
import { Avatar } from "primereact/avatar"
import { useLanguage } from "../utils/LangConfig"
import DropdownLang from "./DropdownLang"

const ToolBar = () => {
    const { t } = useLanguage()

    const centerContent = (
        <div className="space-x-3">
            <i className="pi pi-bell text-white"></i>
            <i className="pi pi-gear text-white"></i>

            <Avatar image={'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png'} size="large" shape="circle" />
        </div>
    )

    const endContent = (
        <i className="pi pi-bell text-white"></i>
    )

    return (
        <>
            <header className="mt-4 flex justify-end bg-greenCustom py-1 h-16">
                <Toolbar center={centerContent} end={endContent} className="bg-greenCustom border border-none outline outline-none" />
            </header >
        </>
    )
}

export default ToolBar