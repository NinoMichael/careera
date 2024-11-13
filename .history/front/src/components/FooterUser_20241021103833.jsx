import { useLanguage } from "../utils/LangConfig"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const FooterUser = () => {
    const { t } = useLanguage()

    return (
        <footer className="mt-20 ">
            <section className="mt-20 bg-blackCustom">
                <div>
                </div>

                <div>
                    <h4 className="font-kanit text-white">{t('quickLinks')}</h4>
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