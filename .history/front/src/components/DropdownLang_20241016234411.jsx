import { useLanguage } from '../utils/LangConfig'
import { Dropdown } from 'primereact/dropdown'

const DropdownLang = () => {
    const { language, switchLanguage } = useLanguage()

    const langOptions = [
        { name: 'Français', code: 'FR' },
        { name: 'English', code: 'EN' },
        { name: 'Malagasy', code: 'MG' },
    ]

    const handleLanguageChange = (e) => {
        switchLanguage(e.value);
    }

    return (
        <div className='flex mt-12 space-x-6 me-8'>
            <i className='pi pi-globe text-slate-800'></i>
            <Dropdown value={language} onChange={handleLanguageChange} options={langOptions} optionLabel='code'
                optionValue='code' className='h-8 w-16 -mt-2 border border-none shadow-md custom-p-dropdown' panelClassName='text-sm'
                placeholder={language} dropdownIcon="pi pi-chevron-down text-sm mt-1" valueTemplate={(option) => <span>{option.code}</span>} itemTemplate={(option) => <span>{option.code}</span>}
            />
        </div>
    )
}

export default DropdownLang