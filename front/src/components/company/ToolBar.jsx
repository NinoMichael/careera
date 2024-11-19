import { useState } from "react"
import { Toolbar } from "primereact/toolbar"
import { Avatar } from "primereact/avatar"
import { Dropdown } from "primereact/dropdown"
import { useLanguage } from "../../utils/LangConfig"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"

import intelcia from "../../assets/intelcia.png"

const ToolBarCompany = ({ collapsed, setCollapsed }) => {
    const { language, switchLanguage, t } = useLanguage()

    const [inputSearch, setInputSearch] = useState("")

    const langOptions = [
        { name: 'Français', code: 'FR' },
        { name: 'English', code: 'EN' },
        { name: 'Malagasy', code: 'MG' },
    ]

    const handleLanguageChange = (e) => {
        switchLanguage(e.value.code)
    }

    const centerContent = (
        <div className="space-x-24">
            <div className="space-x-6 mt-2">
                <i className="pi pi-bell text-white cursor-pointer" title={t('notification')}></i>
                <i className="pi pi-cog text-white cursor-pointer" title={t('setting')}></i>
            </div>

            <div className="flex items-center space-x-3 -mt-7 ms-12">
                <i className="pi pi-globe text-white"></i>
                <Dropdown value={langOptions.find(option => option.code === language)} options={langOptions} onChange={handleLanguageChange}
                    optionLabel="code" className="text-white custom-dropdown-toolbar bg-transparent border-none p-0 outline-none"
                    panelClassName="text-white font-poppins text-xs" dropdownIcon={<i className="pi pi-chevron-down text-xs text-white"></i>} />
            </div>
        </div>
    )

    const endContent = (
        <div className="mt-7 ms-2">
            <Avatar image={intelcia} className="-mt-12" size="large" shape="circle" />
        </div>
    )

    return (
        <>
            <header className={`mt-4 flex justify-between ${collapsed ? 'ps-24' : 'ps-64'} pe-6 bg-greenCustom h-[4.75rem]`}>
                <div className="flex flex-row justify-start space-x-12">
                    <div>
                        <h2 className="font-kanit text-2xl text-white">{t('dashboard')}</h2>
                    </div>

                    <div className="bg-greenCustom">
                        <div className="p-inputgroup flex-1 h-10 mt-4 custom-border-search rounded-3xl">
                            <InputText placeholder="Rechercher" className="w-[25vw] custom-input-search-for-company bg-transparent indent-3 placeholder:text-white border border-none font-poppins text-xs text-white"
                                value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} />
                            <Button title="Rechercher" icon="pi pi-search" className="text-white me-3 border border-none bg-transparent p-inputgroup-addon outline outline-none" />
                        </div>
                    </div>
                </div>
                <Toolbar center={centerContent} end={endContent} className="bg-greenCustom border border-none outline-none" />
            </header >
        </>
    )
}

export default ToolBarCompany
