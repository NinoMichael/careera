import { Button } from "primereact/button"
import { Dialog } from "primereact/dialog"
import { Avatar } from "primereact/avatar"
import PropTypes from "prop-types"

import axian from "../assets/axian.png"

const FirmDialog = ({ visibleFirm, setVisibleFirm, firmSelected, setFirmSelected }) => {
    return (
        <Dialog visible={visibleFirm} className="pt-4 pb-6 px-6 rounded bg-white h-[85vh] w-[60vw]"
            onHide={() => { if (!visibleFirm) return; setVisibleFirm(false) }}
            content={({ hide }) => (
                <>
                    <div>
                        <i className="pi pi-arrow-left"></i>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row justify-start">
                            <Avatar image={ingenosya} shape="circle" size="large" />
                        </div>

                        <Button label="Contacter" icon="pi pi-phone" className="font-poppins text-xs text-white border border-none outline outline-none bg-greenCustom" />
                    </div>
                </>
            )}>

        </Dialog>
    )
}

FirmDialog.propTypes = {
    visibleFirm: PropTypes.bool.isRequired,
    setVisibleFirm: PropTypes.func.isRequired,
    firmSelected: PropTypes.object.isRequired,
    setFirmSelected: PropTypes.func.isRequired
}

export default FirmDialog