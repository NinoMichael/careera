import { Toolbar } from "primereact/toolbar"
import { useLanguage } from "../utils/LangConfig"

const ToolBar = () => {
    const { t } = useLanguage()

    const endContent = (

    )

    return (
        <>
            <header className="mt-4 flex justify-end bg-greenCustom">
                <Toolbar end={endContent} />
            </header >
        </>
    )
}

export default ToolBar