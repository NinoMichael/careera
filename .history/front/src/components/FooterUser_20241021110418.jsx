import { useLanguage } from "../utils/LangConfig"
import { Link } from "react-router-dom"

const FooterUser = () => {
    const { t } = useLanguage()

    return (
        <footer className="mt-20 bg-blackCustom p-4">
            <section className="grid grid-cols-4 mx-24">
                <div>

                </div>

                <div>
                    <h4 className="font-kanit text-white text-base">{t('quickLinks')}</h4>
                    <Link to="/home"><p className="text-xs text-white">{t('home')}</p></Link>
                    <Link to="/home"><p className="text-xs text-white">{t('about')}</p></Link>
                    <Link to="/recruit"><p className="text-xs text-white">{t('recruitTxt')}</p></Link>
                </div>

                <div>
                    <h4 className="font-kanit text-white text-base">{t('support')}</h4>
                    <Link to="/home"><p className="text-xs text-white">FAQs</p></Link>
                    <Link to="/home"><p className="text-xs text-white">{t('use2Condition')}</p></Link>
                    <Link to="/recruit"><p className="text-xs text-white">{t('privacy2Policy')}</p></Link>
                </div>

                <div>

                </div>
            </section>

            <section>

            </section>

        </footer>
    )
}

export default FooterUser