import { motion } from "framer-motion"
import VMenu from "../../components/VMenu"

const ListJob = () => {
    return (
        <>
            <VMenu />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
                <VMenu />
            </motion.div>
        </>

    )
}

export default ListJob