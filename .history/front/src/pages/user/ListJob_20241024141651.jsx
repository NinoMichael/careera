import { motion } from "framer-motion"
import VMenu from "../../components/VMenu"
import ToolBar from "../../components/ToolBar"

const ListJob = () => {
    return (
        <>
            <VMenu />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-[92vw] ms-52 -mt-4">
                <ToolBar />

            </motion.div>
        </>

    )
}

export default ListJob