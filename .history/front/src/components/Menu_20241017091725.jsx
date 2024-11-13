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
            label: t('about'),
            command: () => navigate('/about')
        }
    ]

    const logoContainer = (
        <div>
            <img src={logo} alt="Logo" width={100} height={100} className='w-24 h-20 me-48 ms-20 cursor-pointer' title={t('titleLogo')} />
        </div>
    )

    const authBtn = (
        <div className="flex ms-20 space-x-3">
            <Link to="/login"><Button label={t('login')} className="bg-greenCustom text-white font-poppins border border-none outline outline-none text-sm py-2 px-6" /></Link>
            <Link to="/register-email"><Button label={t('register')} className="bg-blackCustom  text-white font-poppins border border-none outline outline-none text-sm py-2 px-6" /></Link>
        </div>
    )

    return (
        <>
            <div className='flex justify-between mt-1'>
                <Menubar model={menuItems} className='custom-menubar font-poppins text-sm' start={logoContainer} end={authBtn} />
                <DropdownLang className="flex mt-10 space-x-8 me-16" />
            </div>
        </>
    )
}


export default MenuUser