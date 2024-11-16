import { motion } from "framer-motion"
import MenuUser from "../../components/Menu"

import '../../index.css'

const Home = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MenuUser />

            <main className="mt-5 mx-4">
                <header className="mx-2 bg-blackCustom grid grid-cols-2 py-2 px-3 rounded-lg">
                    <div>

                    </div>
                </header>
            </main>
        </motion.div>
    )
}

export default Home