import { Toolbar } from "primereact/toolbar"
import { useLanguage } from "../utils/LangConfig"

const ToolBar = () => {
    const { t } = useLanguage()

    const centerContent = (
        <i className="pi pi"></i>
    )

    const endContent = (
        
    )

    return (
        <>
            <header className="mt-4 flex justify-end bg-greenCustom">
                <Toolbar center={align - content - center} end={endContent} />
            </header >
        </>
    )
}

export default ToolBar