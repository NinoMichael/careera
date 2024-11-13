import { useLanguage } from "../utils/LangConfig"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const FooterUser = ({ className }) => {
    const { t } = useLanguage()

    return (
        <footer className={className}>
            <div>
            </div>

            <div>
                <h4 className="font-kanit text-white">{t('quickLinks')}</h4>
                <Link to="/home">{t('home')}</Link>
            </div>

            <div>

            </div>

            <div>

            </div>
        </footer>
    )
}

FooterUser.propTypes = {
    className: PropTypes.string,
}

export default FooterUser