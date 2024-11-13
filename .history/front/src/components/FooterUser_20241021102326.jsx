import { useLanguage } from "../utils/LangConfig"

const FooterUser = () => {
    const { t } = useLanguage()

    const

    return (
        <footer className="mt-16 bg-blackCustom grid grid-cols-4">
            <div>

            </div>

            <div>
                <h4>{t('quickLinks')}</h4>
            </div>
        </footer>
    )
}

export default FooterUser