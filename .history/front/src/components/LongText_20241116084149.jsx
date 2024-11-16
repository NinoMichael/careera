import { useState } from "react"

const LongText = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleText = () => {
        setIsExpanded(!isExpanded)
    }
}

export default LongText