import { useState } from "react"
import { useLanguage } from "../utils/LangConfig"
import PropTypes from "prop-types"
import { FloatLabel } from "primereact/floatlabel"
import { Dropdown } from "primereact/dropdown"
import { Button } from "primereact/button"

import '../styles/user/style.css'

const SearchMain = ({ className }) => {
    const { t } = useLanguage()
    const [domain, setDomain] = useState(null)
    const [statutJob, setStatutJob] = useState(null)
    const [location, setLocation] = useState(null)

    const domains = [
        { id: 1, intitule: "Agronomie" },
        { id: 2, intitule: "Commerce" },
        { id: 3, intitule: "Informatique" },
        { id: 4, intitule: "Administration" },
        { id: 5, intitule: "Management" },
    ]

    const status = [
        { id: 1, statut: "Local" },
        { id: 2, statut: "Remote" },
    ]

    const locations = [
        { id: 1, intitule: "Antananarivo" },
        { id: 2, intitule: "Toamasina" },
        { id: 3, intitule: "Mahajanga" },
        { id: 4, intitule: "Antsiranana" },
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

    const statutTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div>{option.statut}</div>
                </div>
            )
        }

        return <span>{props.placeholder}</span>
    }

    const locationTemplate = (option, props) => {
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
        <form className={className}>
            <FloatLabel className="relative focus-within:text-white">
                <Dropdown value={domain} onChange={(e) => setDomain(e.value)} options={domains}
                    optionLabel="intitule" filter valueTemplate={domainTemplate} itemTemplate={domainTemplate} panelClassName="font-poppins text-sm"
                    className="w-40 h-10 rounded font-poppins text-xs bg-white border custom-p-dropdown-trip border-slate-400"
                />
                <label htmlFor="dd-domain" className="text-xs -mt-3">
                    <i className="pi pi-briefcase text-xs me-1"></i> {t('domain')}
                </label>
            </FloatLabel>

            <FloatLabel className="relative focus-within:text-white">
                <Dropdown value={statutJob} onChange={(e) => setStatutJob(e.value)} options={status}
                    optionLabel="statut" filter valueTemplate={statutTemplate} itemTemplate={statutTemplate} panelClassName="font-poppins text-sm"
                    className="w-40 h-10 rounded font-poppins text-xs bg-white border custom-p-dropdown-trip border-slate-400"
                />
                <label htmlFor="dd-statut" className="text-xs -mt-3">
                    <i className="pi pi-briefcase text-xs me-1"></i> {t('statusJob')}
                </label>
            </FloatLabel>

            <FloatLabel className="relative focus-within:text-white">
                <Dropdown value={location} onChange={(e) => setLocation(e.value)} options={locations}
                    optionLabel="intitule" filter valueTemplate={locationTemplate} itemTemplate={locationTemplate} panelClassName="font-poppins text-sm"
                    className="w-40 h-10 rounded font-poppins text-xs bg-white border custom-p-dropdown-trip border-slate-400"
                />
                <label htmlFor="dd-domain" className="text-xs -mt-3">
                    <i className="pi pi-briefcase text-xs me-1"></i> {t('domain')}
                </label>
            </FloatLabel>

            <Button label={t('search')} icon="pi pi-search" className="bg-blackCustom text-white text-xs border border-none outline outline-none font-poppins" />
        </form>
    )
}

SearchMain.propTypes = {
    className: PropTypes.string,
}

export default SearchMain
