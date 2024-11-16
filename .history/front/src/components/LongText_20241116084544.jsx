import { useState } from "react"

const LongText = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const limit = 230

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
                    className=""
                    onClick={toggleText}
                >
                    {isExpanded ? 'Voir moins' : 'Voir plus'}
                </span>
            )}
        </div>
    )
}

export default LongText