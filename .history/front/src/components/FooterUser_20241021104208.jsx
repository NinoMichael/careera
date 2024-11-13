import { useLanguage } from "../utils/LangConfig"
import { Link } from "react-router-dom"

const FooterUser = () => {
    const { t } = useLanguage()

    return (
        <footer className="mt-20 bg-blackCustom">
            <section className="grid grid-cols-4">
                <div>

                </div>

                <div>
                    <h4 className="font-kanit text-white text-sm">{t('quickLinks')}</h4>
                    <Link to="/home"><p className="text-xs text-white">{t('home')}</p></Link>
                    <Link to="/home"><p className="text-xs text-white">{t('home')}</p></Link>
                </div>

                <div>

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