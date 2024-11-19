import { useState } from "react"
import { useLanguage } from "../../utils/LangConfig"
import VMenuCompany from "../../components/company/VMenu"
import { motion } from "framer-motion"
import ToolBarCompany from "../../components/company/ToolBar"

const DashboardCompany = () => {
    const { t } = useLanguage()
    const [collapsed, setCollapsed] = useState(false)

    return (
        <>
            <VMenuCompany collapsed={collapsed} setCollapsed={setCollapsed} />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="-mt-4 -z-10">
                <ToolBarCompany collapsed={collapsed} setCollapsed={setCollapsed} />

                <main className={` ${collapsed ? 'ms-24' : 'ms-64'} me-12 mt-7`}>

                </main>
            </motion.div>
        </>
    )
}

export default DashboardCompany 