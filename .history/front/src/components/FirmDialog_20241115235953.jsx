import { Dialog } from "primereact/dialog"
import PropTypes from "prop-types"

const FirmDialog = ({ visibleFirm, setVisibleFirm, firmSelected, setFirmSelected }) => {
    return (
        <Dialog modal visible={visibleFirm} className="p-4 rounded bg-white h-[85vh] w-[55vw]"
            onHide={() => { if (!visibleFirm) return; setVisibleFirm(false) }}
            content={({ hide }) => (
                <div>
                    <p>Bonjour</p>
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