import { Dialog } from "primereact/dialog"
import PropTypes from "prop-types"

const FirmDialog = ({ visibleFirm, setVisibleFirm }) => {
    return (
        <Dialog visible={visibleFirm} className="p-4 rounded bg-white h-[50vh] w-[55vw]"
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