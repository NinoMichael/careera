import { useState } from "react"

const LongText = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const limit = 200

    const toggleText = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div>
            <p>
                {isExpanded ? text : `${text.substring(0, limit)}...`}
            </p>
            {text.length > limit && (
                <span
                    className="p-button p-component p-button-text p-ml-2"
                    onClick={toggleText}
                >
                    {isExpanded ? 'Voir moins' : 'Voir plus'}
                </span>
            )}
        </div>
    )
}

export default LongText