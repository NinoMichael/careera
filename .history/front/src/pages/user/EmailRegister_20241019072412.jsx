import { motion } from "framer-motion"
import DropdownLang from "../../components/DropdownLang"
import { useNavigate } from "react-router-dom"


const EmailRegister = () => {
    const navigate = useNavigate()

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-y-hidden" >
            <div className="mt-6 mx-12 flex justify-between">
                <i className="pi pi-arrow-left cursor-pointer" onClick={() => navigate('/home')} title={t('back')}></i>
                <DropdownLang className="flex space-x-8 overflow-y-hidden" />
            </div>
        </motion.div >
    )
}

export default EmailRegister