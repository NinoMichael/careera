import { useLanguage } from "../../utils/LangConfig"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Button } from "primereact/button"
import DropdownLang from "../../components/DropdownLang"

const HomeRegister = () => {
    const { t } = useLanguage()
    const navigate = useNavigate()

    return (
        <div className="overflow-y-hidden">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-y-hidden">
                <div className="mt-6 mx-12 flex justify-between">
                    <i className="pi pi-arrow-left cursor-pointer" onClick={() => navigate('/home')} title="Retour"></i>
                    <DropdownLang className="flex space-x-8 overflow-y-hidden" />
                </div>

            </motion.div>
        </div>
    )
}

export default HomeRegister