import { Link } from "react-router-dom"
import { Badge } from "primereact/badge"
import { useLanguage } from "../utils/LangConfig"
import { InputSwitch } from "primereact/inputswitch"
import { Menu } from "primereact/menu"
import { useState } from "react"

import logo from '../assets/icons/logo.png'

const VMenu = () => {
    const { t } = useLanguage()
    const [checked, setChecked] = useState(false)
    const [collapsed, setCollapsed] = useState(false)

    const toggleMenu = () => {
        setCollapsed(!collapsed)
    }

    const itemRenderer = (item) => (
        <div className={`p-menuitem-content ps-4 hover:bg-greenCustom hover:text-white rounded mb-5 ${collapsed ? 'justify-center' : ''}`}>
            <Link className="flex align-items-center p-menuitem-link text-black py-2">
                <span className={item.icon} />
                {!collapsed && (
                    <>
                        <span className="mx-2">{item.label}</span>
                        {item.badge && <Badge className="ml-auto font-poppins bg-greenCustom hover:bg-white hover:text-black" value={item.badge} />}
                    </>
                )}
            </Link>
        </div>
    )

    let items = [
        {
            template: () => {
                return (
                    <div className={`cursor-pointer ${collapsed ? "mx-2 my-3" : "my-3"}`} onClick={toggleMenu}>
                        <img src={logo} alt="Logo" width={150} height={150} className={`mx-auto flex justify-center items-center ${collapsed ? 'w-16 h-12' : 'w-24 h-20'}`} />
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
                    label: t('jobTxt'),
                    icon: 'pi pi-briefcase',
                    template: itemRenderer,
                    url: '/'
                },
                {
                    label: t('candidate'),
                    icon: 'pi pi-user',
                    template: itemRenderer,
                    url: '/'
                },
                {
                    label: t('messageTxt'),
                    icon: 'pi pi-inbox',
                    badge: 2,
                    template: itemRenderer
                },
                {
                    label: t('saveTxt'),
                    icon: 'pi pi-save',
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
                        <div className="flex justify-center space-x-6 mt-20">
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
        <div className={`fixed float-left -mt-1 ${collapsed ? 'w-[9vw]' : 'w-[17vw]'}`}>
            <Menu model={items} className={`w-64 font-poppins text-sm border border-none shadow-xl h-[100vh] ${collapsed ? 'w-[5vw]' : 'w-[15vw]'}`} />
        </div>
    )
}

export default VMenu
