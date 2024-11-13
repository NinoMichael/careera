import { useLanguage } from "../utils/LangConfig"
import PropTypes from "prop-types"

const FooterUser = ({ className }) => {
    const { t } = useLanguage()

    return (
        <footer className={className}>
            <div>

            </div>

            <div>
                <h4>{t('quickLinks')}</h4>
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