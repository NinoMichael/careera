import { Link } from "react-router-dom"
import { Badge } from "primereact/badge"
import { useLanguage } from "../utils/LangConfig"
import { InputSwitch } from "primereact/inputswitch"
import { Menu } from "primereact/menu"
import logo from '../assets/icons/logo.png'

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
                    label: t('lo
