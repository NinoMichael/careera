import { Menubar } from 'primereact/menubar'
import { useLanguage } from '../utils/LangConfig'

import logo from '../assets/icons/logo.png'

const MenuUser = () => {
    const { t } = useLanguage()

    const logoContainer = (
        <div>
            <img src={logo} alt="Logo" width={100} height={100} className='w-24 h-24 me-48' />
        </div>
    )

    const authBtn = (
        <div className="flex ms-20 space-x-3">
            <Link to="/login"><Button label={t('login')} className="bg-amber-400 hover:bg-amber-500 font-poppins border border-none outline outline-none text-sm max-sm:text-xs" /></Link>
            <Link to="/register-email"><Button label={t('register')} className="bg-slate-900 hover:bg-slate-950 text-white font-poppins border border-none outline outline-none text-sm max-sm:text-xs" /></Link>
        </div>
    )

    return (
        <>
            <div className='max-xmd:hidden flex justify-between'>
                <Menubar model={menuItems} className='' start={logoContainer} end={authBtn} />
                {languageDropdown}
            </div>
        </>
    )
}

export default MenuUser