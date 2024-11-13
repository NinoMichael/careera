import { useLanguage } from "../utils/LangConfig"
import PropTypes from "prop-types"

const SearchBar = ({ className }) => {
    const { t } = useLanguage()

    return (
        <div className={className}>

        </div>
    )
}

SearchBar.propTypes = {
    className: PropTypes.string,
}

export default SearchBar