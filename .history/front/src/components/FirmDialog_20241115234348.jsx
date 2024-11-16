import { Dialog } from "primereact/dialog"
import PropTypes from "prop-types"

const FirmDialog = ({ visibleFirm, setVisibleFirm }) => {
    return (
        <Dialog modal visible={visibleFirm}
            onHide={() => { if (!visibleFirm) return; setVisibleFirm(false) }}
            content={({ hide }) => (
                <div>

                </div>
            )}>

        </Dialog>
    )
}

FirmDialog.propTypes = {
    visibleFirm: PropTypes.bool.isRequired,
    setVisibleFirm: PropTypes.func.isRequired
}

export default FirmDialog