import { Toolbar } from "primereact/toolbar"
import { useLanguage } from "../utils/LangConfig"

const ToolBar = () => {
    const { t } = useLanguage()

    return (
        <>
            <header className="mt-4 flex justify-end bg-greenCustom">

            </header >
        </>
    )
}

export default ToolBar