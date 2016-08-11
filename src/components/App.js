import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {history, browserHistory, Link} from 'react-router'

import 'style/css/core.css'

const basePath = __PROD__ ? '/react-redux-simple-address-book' : '';

class App extends Component {
    constructor (props) {
        super(props)

    }

    render () {

        // 現在のパスを取得
        // このパスと同じなら、navのliにclass「active」をつける
        let pathName = this.props.location.pathname;

        return (

            <div className="container">
                <div className="masthead clearfix">
                    <div className="inner">
                        <h3 className="masthead-brand">React + Redux Address Book</h3>
                        <nav>
                            <ul className="nav masthead-nav">
                                <li className={pathName === '/' ? 'active' : ''}>
                                    <Link to={`${basePath}/`}>Home</Link>
                                </li>
                                <li className={pathName === '/pnl' ? 'active' : ''}>
                                    <Link to={`${basePath}/pnl`}>Personal</Link>
                                </li>
                                <li className={pathName === '/company' ? 'active' : ''}>
                                    <Link to={`${basePath}/company`}>Company</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="page-body">
                    {this.props.children}
                </div>



                <div className="mastfoot">
                  <div className="inner">
                    <p>
                        Cover template for <a href="http://getbootstrap.com">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.<br/>
                        This project base is <a href="https://github.com/davezuko/react-redux-starter-kit">davezuko / react-redux-starter-kit</a>
                    </p>
                  </div>
                </div>

            </div>
        )
    }
}

export default App
