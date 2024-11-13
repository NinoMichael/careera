import { motion } from "framer-motion"
import VMenu from "../../components/VMenu"
import ToolBar from "../../components/ToolBar"
import { useLanguage } from "../../utils/LangConfig"
import SearchMain from "../../components/SearchMain"

const ListJob = () => {
    const { t } = useLanguage()

    const [collapsed, setCollapsed] = useState(false)

    const toggleMenu = () => {
        setCollapsed(!collapsed)
    }

    return (
        <>
            <VMenu />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="-mt-4 -z-10">
                <ToolBar />

                <main className="ms-64 me-12 mt-7">
                    <div className="flex justify-between">
                        <SearchMain className="flex flex-row space-x-4" />

                        <div className="flex justify-start space-x-6 mt-3">
                            <span className="text-xs">Sort by : <span className="font-semibold">Last updated</span></span>
                            <i className="pi pi-sliders-h text-xl cursor-pointer" title={t('filter')}></i>
                        </div>
                    </div>

                </main >

            </motion.div >
        </>

    )
}

export default ListJob