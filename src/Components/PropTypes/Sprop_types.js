import React, { Component } from 'react'
import PropTypes from 'prop-types'

// propType validation with class component

// export class Sprop_types extends Component {
//      static propTypes ={
        // title: PropTypes.string.isRequired,
        // url: PropTypes.string
        // children:PropTypes.element.isRequired
//     };
//     render() {
//         return (
//             <div>
//                 {this.props.title}
//                 {this.props.children}
//             </div>
//         )
//     }
// }

// export default Sprop_types

// with functional component

const Sprop_types = (props) => {
    return (
        <div>
            To use propType validation , you need to install npm install prop_types
        </div>
    )
};

Sprop_types.propTypes = {
    // title: PropTypes.string.isRequired, 
    // url: PropTypes.string
    children:PropTypes.element.isRequired
};

export default Sprop_types
