import { useState } from "react"
import { Link } from "react-router-dom"
import { Badge } from "primereact/badge"
import { useLanguage } from "../utils/LangConfig"
import { InputSwitch } from "primereact/inputswitch"
import { Menu } from "primereact/menu"
import logo from '../assets/icons/logo.png'
import PropTypes from "prop-types"

const VMenu = ({ collapsed, setCollapsed }) => {
    const { t } = useLanguage()
    const [checked, setChecked] = useState(false)

    const toggleMenu = () => {
        setCollapsed(!collapsed)
    }

    const itemRenderer = (item) => (
        <div className={`p-menuitem-content ps-4 hover:bg-greenCustom hover:text-white rounded ${collapsed ? 'justify-center mb-6' : 'mb-5'} transition-all duration-300`}>
            <Link className="flex align-items-center p-menuitem-link text-black py-2" to={item.url}>
                <span className={item.icon} />
                {!collapsed && (
                    <>
                        <span className="mx-2 transition-opacity duration-300">{item.label}</span>
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
                        <img src={logo} alt="Logo" width={150} height={150} className={`mx-auto flex justify-center items-center ${collapsed ? 'w-16 h-12' : 'w-24 h-20'} transition-all duration-300`} />
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
                    url: '/list-job'
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
                        {collapsed ? (
                            <i className="pi pi-sun mt-28 text-center flex justify-center items-center ms-7 cursor-pointer"></i>
                        ) : (
                            <>
                                <div className="flex justify-center space-x-6 mt-20 transition-opacity duration-300">
                                    <i className="pi pi-sun mt-2"></i>
                                    <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                                    <i className="pi pi-moon mt-2"></i>
                                </div>

                                <p className="text-[0.65em] text-center mt-6 transition-opacity duration-300">{t('copyright')}</p>
                            </>
                        )}
                    </>
                )
            }
        },
    ]

    return (
        <div className={`fixed float-left z-10 -mt-1 ${collapsed ? 'w-[9vw]' : 'w-[17vw]'} transition-all duration-300`}>
            <Menu model={items} className={`w-64 font-poppins text-sm border border-none shadow-xl h-[100vh] transition-all duration-300 ${collapsed ? 'w-[5vw]' : 'w-[15vw]'}`} />
        </div>
    )
}

VMenu.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    setCollapsed: PropTypes.func.isRequired
}

export default VMenu
