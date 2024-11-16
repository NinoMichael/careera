import { useLanguage } from "../utils/LangConfig"
import PropTypes from "prop-types"
import { FloatLabel } from "primereact/floatlabel"
import { Dropdown } from "primereact/dropdown"
import { useState } from "react"

const SearchBar = ({ className }) => {
    const { t } = useLanguage()
    const [domain, setDomain] = useState(null)

    const domains = [
        { id: 1, intitule: "Agronomie" },
        { id: 2, intitule: "Commerce" },
        { id: 3, intitule: "Informatique" },
        { id: 4, intitule: "Administration" },
        { id: 5, intitule: "Management" },
    ]

    const domainTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div>{option.intitule}</div>
                </div>
            )
        }

        return <span>{props.placeholder}</span>
    }

    return (
        <div className={className}>
            <FloatLabel className="relative focus-within:text-white">
                <Dropdown value={domain} onChange={(e) => setDomain(e.value)} options={domain} optionLabel="intitule"
                    filter valueTemplate={domainTemplate} panelClassName="font-poppins text-sm" className="w-36 h-12 font-poppins text-sm bg-white border custom-p-dropdown-trip border-slate-400" />
                <label htmlFor="dd-domain" className="text-sm -mt-3"><i className="pi pi-briefcase text-sm me-1"></i> {t('departure')}</label>
            </FloatLabel>
        </div>
    )
}

SearchBar.propTypes = {
    className: PropTypes.string,
}

export default SearchBar