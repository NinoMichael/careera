import { useLanguage } from "../utils/LangConfig"

const FooterUser = () => {
    const { t } = useLanguage()

    return (
        <footer className="mt-16 bg-blackCustom grid grid-cols-4">
            <div></div>
        </footer>
    )
}

export default FooterUser