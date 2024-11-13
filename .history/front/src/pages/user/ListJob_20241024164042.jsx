import { motion } from "framer-motion"
import VMenu from "../../components/VMenu"
import ToolBar from "../../components/ToolBar"
import { useLanguage } from "../../utils/LangConfig"
import SearchMain from "../../components/SearchMain"

const ListJob = () => {
    const { t } = useLanguage()

    return (
        <>
            <VMenu />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="-mt-4 -z-10">
                <ToolBar />

                <main className="ms-64 mt-7">
                    <div className="flex justify-between">
                        <SearchMain className="flex flex-row space-x-4" />

                        <div>
                            <div></div>
                        </div>
                    </div>

                </main >

            </motion.div >
        </>

    )
}

export default ListJob