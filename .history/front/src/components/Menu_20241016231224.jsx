import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import { useLanguage } from '../utils/LangConfig'
import { Link, useNavigate } from 'react-router-dom'

import logo from '../assets/icons/logo.png'
import DropdownLang from './DropdownLang'

const MenuUser = () => {
    const { t } = useLanguage()
    const navigate = useNavigate()

    const menuItems = [
        {
            label: t('home'),
            command: () => navigate('/home')
        },
        {
            label: t('trip'),
            command: () => navigate('/about')
        }
    ]

    const logoContainer = (
        <div>
            <img src={logo} alt="Logo" width={100} height={100} className='w-24 h-24 me-48' />
        </div>
    )

    const authBtn = (
        <div className="flex ms-20 space-x-3">
            <Link to="/login"><Button label={t('login')} className="bg-greenCustom font-poppins border border-none outline outline-none text-sm" /></Link>
            <Link to="/register-email"><Button label={t('register')} className="bg-blackCustom  text-white font-poppins border border-none outline outline-none text-sm" /></Link>
        </div>
    )

    return (
        <>
            <div className='flex justify-between'>
                <Menubar model={menuItems} className='' start={logoContainer} end={authBtn} />
                {DropdownLang}
            </div>
        </>
    )
}

export default MenuUser