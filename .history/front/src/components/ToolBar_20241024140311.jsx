import { useLanguage } from "../utils/LangConfig"


const ToolBar = () => {
    const { t } = useLanguage()

    return (
        <>
            <header className="mt-4 flex justify-end bg-greenCustom">
                <div>
                    <i></i>
                </div>
            </header >
        </>
    )
}

export default ToolBar