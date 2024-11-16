import { Dialog } from "primereact/dialog"
import PropTypes from "prop-types"

const FirmDialog = ({ visibleFirm, setVisibleFirm, firmSelected, setFirmSelected }) => {
    return (
        <Dialog visible={visibleFirm} className="pt-3 pb-6 px-6 rounded bg-white h-[85vh] w-[60vw]"
            onHide={() => { if (!visibleFirm) return; setVisibleFirm(false) }}
            content={({ hide }) => (
                <div>
                    <i className="pi pi-arrow-left"></i>
                </div>
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