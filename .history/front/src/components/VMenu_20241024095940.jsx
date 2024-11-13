import { Link } from "react-router-dom"
import { Badge } from "primereact/badge"
import { useLanguage } from "../utils/LangConfig"

import logo from '../assets/icons/logo.png'

const VMenu = () => {
    const { t } = useLanguage()

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
                    <div className="bg-slate-900">
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
                    label: t('dashboard'),
                    icon: 'pi pi-chart-bar',
                    template: itemRenderer,
                    url: '/dashboard-coop'
                },
                {
                    label: t('trip'),
                    icon: 'pi pi-compass',
                    template: itemRenderer,
                    url: '/trip-coop'
                },
                {
                    label: 'Bus',
                    icon: 'pi pi-car',
                    template: itemRenderer,
                    url: '/bus-coop'
                },
                {
                    label: t('driver'),
                    icon: 'pi pi-user',
                    template: itemRenderer,
                    url: '/driver-coop'
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
}

export default VMenu