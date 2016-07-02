import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import 'style/css/core.css'

import GlobalHeader from 'components/GlobalHeader'

function CoreLayout ({ children }) {
    return (
        <div className="container">

            <GlobalHeader/>

            {children}

        </div>
    )
}


export default CoreLayout
