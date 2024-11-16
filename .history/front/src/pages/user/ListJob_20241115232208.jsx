import { useState } from "react"
import { motion } from "framer-motion"
import VMenu from "../../components/VMenu"
import { Paginator } from 'primereact/paginator'
import ToolBar from "../../components/ToolBar"
import { useLanguage } from "../../utils/LangConfig"
import SearchMain from "../../components/SearchMain"
import CardJob from "../../components/CardJob"

const ListJob = () => {
    const { t } = useLanguage()
    const [collapsed, setCollapsed] = useState(false)

    const [first, setFirst] = useState(0)
    const [rows, setRows] = useState(10)

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <>
            <VMenu collapsed={collapsed} setCollapsed={setCollapsed} />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="-mt-4 -z-10">
                <ToolBar collapsed={collapsed} setCollapsed={setCollapsed} />

                <main className={` ${collapsed ? 'ms-24' : 'ms-64'} me-12 mt-7`}>
                    <div className="flex justify-between mb-8">
                        <SearchMain className="flex flex-row space-x-4" />

                        <div className="flex justify-start space-x-6 mt-3">
                            <span className="text-xs">Sort by : <span className="font-semibold">Last updated</span></span>
                            <i className="pi pi-sliders-h text-xl cursor-pointer" title={t('filter')}></i>
                        </div>
                    </div>

                    <CardJob />

                    <Paginator first={first} rows={rows} totalRecords={120} className="mt-8 mb-12 font-poppins" onPageChange={onPageChange} />

                </main >
            </motion.div >
        </>
    )
}

export default ListJob
