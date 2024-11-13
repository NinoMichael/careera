import { useLanguage } from "../utils/LangConfig"

const FooterUser = ({ className }) => {
    const { t } = useLanguage()

    const

    return (
        <footer className={className}>
            <div>

            </div>

            <div>
                <h4>{t('quickLinks')}</h4>
            </div>
        </footer>
    )
}

export default FooterUser