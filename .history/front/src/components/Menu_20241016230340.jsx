import { Menubar } from 'primereact/menubar'
import { useLanguage } from '../utils/LangConfig'

import logo from '../assets/icons/logo.png'

const MenuUser = () => {
    const { t } = useLanguage()

    const logoContainer = (
        <div>
            <img src={logo} alt="Logo" width={100} height={100} className='w-24 h-24 me-48  />
        </div>
    )

    return (
        <>

        </>
    )
}

export default MenuUser