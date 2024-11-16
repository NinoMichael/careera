import { useState } from "react"
import PropTypes from "prop-types"

const LongText = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const limit = 280

    const toggleText = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className=" -mt-4">
            <p className="inline font-poppins text-xs">
                {isExpanded ? text : `${text.substring(0, limit)}...`}
                {text.length > limit && (
                    <span
                        className="text-greenCustom font-poppins cursor-pointer ml-2"
                        onClick={toggleText}
                    >
                        {isExpanded ? "Voir moins" : "Voir plus"}
                    </span>
                )}
            </p>
        </div>
    )
}

LongText.propTypes = {
    text: PropTypes.string.isRequired,
}

export default LongText
