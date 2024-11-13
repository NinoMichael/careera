import { useLanguage } from '../utils/LangConfig'
import { Dropdown } from 'primereact/dropdown'

const DropdownLang = () => {
    const { language, switchLanguage, t } = useLanguage()

    return (
        <div className='flex mt-11 me-8 max-[1115px]:me-4 space-x-10 max-sm:space-x-6 max-[1115px]:space-x-3'>
            <i className='pi pi-globe custom-globe2-icon'></i>
            <Dropdown
                value={language}
                onChange={handleLanguageChange}
                options={langOptions}
                optionLabel='code'
                optionValue='code'
                className='h-8 w-16 -mt-2 border border-none shadow-md custom-p-dropdown'
                panelClassName='text-sm'
                placeholder={language}
                dropdownIcon="pi pi-chevron-down text-sm mt-1"
                valueTemplate={(option) => <span>{option.code}</span>}
                itemTemplate={(option) => <span>{option.code}</span>}
            />
        </div>
    )
}

export default DropdownLang