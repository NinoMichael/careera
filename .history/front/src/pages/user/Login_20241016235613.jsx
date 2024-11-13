import { useLanguage } from "../../utils/LangConfig"

const Login = () => {
    const { t } = useLanguage()

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MenuUser />
        </motion.div>
    )
}

export default Login