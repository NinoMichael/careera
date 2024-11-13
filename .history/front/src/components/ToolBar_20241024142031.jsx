import { Toolbar } from "primereact/toolbar"
import { useLanguage } from "../utils/LangConfig"
import DropdownLang from "./DropdownLang"

const ToolBar = () => {
    const { t } = useLanguage()

    const centerContent = (
        <i className="pi pi-bell text-white"></i>
    )

    const endContent = (
        <div className="bg-greenCustom">
            <i className="pi pi-bell text-white"></i>
        </div>

    )

    return (
        <>
            <header className="mt-4 flex justify-end bg-greenCustom">
                <Toolbar center={centerContent} end={endContent} />
            </header >
        </>
    )
}

export default ToolBar