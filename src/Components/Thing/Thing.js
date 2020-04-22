import React from 'react'
import Header from '../../shared/Components/Header/Header'

const Thing = (props) => {
    return (
        <div>
            <h1>Welcome still need to understand dis well</h1>
            <main>
                <p>talking about:{props.match.params.thingID}</p>
            </main>
        </div>
    )
}

export default Thing
