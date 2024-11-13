import { useLanguage } from "../../utils/LangConfig"
import { motion } from "framer-motion"
import MenuUser from "../../components/Menu"

const Login = () => {
    const { t } = useLanguage()

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MenuUser />

            <main className="flex justify-center items-center mx-auto mt-6 shadow rounded w-[75%]">
                <section>

                </section>

                <section className="py-4 px-5">

                </section>
            </main>
        </motion.div>
    )
}

export default Login