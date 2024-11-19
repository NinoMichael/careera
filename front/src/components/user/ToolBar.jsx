import { Toolbar } from "primereact/toolbar"
import { Avatar } from "primereact/avatar"
import { Dropdown } from "primereact/dropdown"
import { useLanguage } from "../../utils/LangConfig"

const ToolBar = ({ collapsed, setCollapsed }) => {
    const { language, switchLanguage, t } = useLanguage()

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
            <Avatar image={'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png'} className="-mt-12" size="large" shape="circle" />
        </div>
    )

    return (
        <>
            <header className={`mt-4 flex justify-between ${collapsed ? 'ps-24' : 'ps-64'} pe-6 bg-greenCustom h-[4.75rem]`}>
                <div>
                    <h1 className="text-white text-2xl font-kanit mt-6">Find your dream job here</h1>
                </div>
                <Toolbar center={centerContent} end={endContent} className="bg-greenCustom border border-none outline-none" />
            </header >
        </>
    )
}

export default ToolBar
