import React from 'react'
import ReactDOM from 'react-dom'

// -- This portals to another DOM element 'portal-root'
function PortalDemo() {
    return ReactDOM.createPortal(
        <h4>Portals demo</h4>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo

