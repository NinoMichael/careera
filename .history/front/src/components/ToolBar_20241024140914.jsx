import { Toolbar } from "primereact/toolbar"
import { useLanguage } from "../utils/LangConfig"

const ToolBar = () => {
    const { t } = useLanguage()

    const centerContent = (
        <i className="pi pi-bell text-white"></i>
    )

    const endContent = (
        <div className="flex flex-row justify-start cursor-pointer">
            <i className="pi pi-globe text-white"></i>
            <span className="text-white"></span>
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