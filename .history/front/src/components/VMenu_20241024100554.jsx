import { Link } from "react-router-dom"
import { Badge } from "primereact/badge"
import { useLanguage } from "../utils/LangConfig"
import { InputSwitch } from "primereact/inputswitch"
import { Menu } from "primereact/menu"

import logo from '../assets/icons/logo.png'
import { useState } from "react"

const VMenu = () => {
    const { t } = useLanguage()
    const [checked, setChecked] = useState(false)

    const itemRenderer = (item) => (
        <div className=''>
            <Link className="flex flew-row justify-center items-center">
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
            </Link>
        </div>
    )

    let items = [
        {
            template: () => {
                return (
                    <div>
                        <img src={logo} alt="Logo" width={150} height={150} className="w-24 h-24 mx-auto" />
                    </div>
                )
            }
        },
        {
            separator: true
        },
        {
            items: [
                {
                    label: t('home'),
                    icon: 'pi pi-home',
                    template: itemRenderer,
                    url: '/home'
                },
                {
                    label: t('job'),
                    icon: 'pi pi-briefcase',
                    template: itemRenderer,
                    url: '/'
                },
                {
                    label: 'candidate',
                    icon: 'pi pi-user',
                    template: itemRenderer,
                    url: '/'
                },
                {
                    label: t('inbox'),
                    icon: 'pi pi-inbox',
                    badge: 2,
                    template: itemRenderer
                },
                {
                    label: t('setting'),
                    icon: 'pi pi-cog',
                    template: itemRenderer
                },
                {
                    label: t('logout'),
                    icon: 'pi pi-sign-out',
                    template: itemRenderer
                }
            ]
        },
        {
            template: () => {
                return (
                    <>
                        <div className="flex justify-center space-x-6 mt-12">
                            <i className="pi pi-sun mt-2"></i>
                            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                            <i className="pi pi-moon mt-2"></i>
                        </div>
                        <p className="text-[0.65em] text-center mt-6">{t('copyright')}</p>
                    </>
                )
            }
        },
    ]

    return (
        <div className="fixed float-left -mt-1">
            <Menu model={items} className="w-64 font-poppins text-sm border border-none shadow-xl h-[100vh]" />
        </div>
    )
}

export default VMenu