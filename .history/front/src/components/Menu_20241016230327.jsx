import { Menubar } from 'primereact/menubar'
import { useLanguage } from '../utils/LangConfig'

import logo from '../assets/icons/logo.png'

const MenuUser = () => {
    const { t } = useLanguage()

    const logoContainer = (
        <div>
            <img src={logo} alt="Logo" width={100} height={100} className='w-24 h-24 me-48 max-xl:me-32 max-[1175px]:me-16 max-[1175px]:-ms-8 max-[1010px]:me-4 max-xmd:w-20 max-xmd:h-20' />
        </div>
    )

    return (
        <>

        </>
    )
}

export default MenuUser