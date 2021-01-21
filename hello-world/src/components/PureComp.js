import React, { PureComponent } from 'react'

// Pure Components only used in need performance boost. If there no changes in State it never re-render. Pure Components uses shallow comparision which compares only similar data which references on the same data
class PureComp extends PureComponent {
    render() {
        return (
            <div>
                Pure component
            </div>
        )
    }
}

export default PureComp
