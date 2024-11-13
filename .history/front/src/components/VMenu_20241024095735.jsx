import { Link } from "react-router-dom"
import { Badge } from "primereact/badge"

const VMenu = () => {
    const itemRenderer = (item) => (
        <div className=''>
            <Link className="flex flew-row justify-center items-center">
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
            </Link>
        </div>
    )
}

export default VMenu