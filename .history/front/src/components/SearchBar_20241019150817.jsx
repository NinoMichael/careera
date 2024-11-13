import { useLanguage } from "../utils/LangConfig"
import PropTypes from "prop-types"

const SearchBar = ({ className }) => {
    const { t } = useLanguage()

    return (
        <div className={className}>
            <FloatLabel className="relative focus-within:text-white">
                <Dropdown value={selectedCitiesD} onChange={(e) => setSelectedCityD(e.value)} options={cities} optionLabel="name"
                    filter valueTemplate={selectedCityTemplate} panelClassName="font-poppins text-sm" className="w-36 max-[1140px]:w-44 max-[860px]:w-36 h-10 font-poppins text-sm bg-white border custom-p-dropdown-trip border-slate-400" />
                <label htmlFor="dd-city" className="text-sm -mt-3"><i className="pi pi-map-marker  text-sm me-1"></i> {t('departure')}</label>
            </FloatLabel>
        </div>
    )
}

SearchBar.propTypes = {
    className: PropTypes.string,
}

export default SearchBar