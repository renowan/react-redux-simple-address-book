import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {history, browserHistory, Link} from 'react-router'

class GlobalHeader extends Component {
    constructor (props) {
        super(props)
    }

    render () {


        // let pathName = this.props.location.pathname;
        // console.log(pathName);

        // <li className={pathName === '/' ? 'action' : ''}>
        //     <Link to='/'>Home</Link>
        // </li>
        // <li className={pathName === '/pnl' ? 'action' : ''}>
        //     <Link to='/pnl'>Personal</Link>
        // </li>
        // <li className={pathName === '/company' ? 'action' : ''}>
        //     <Link to='/company'>Company</Link>
        // </li>

        return (
            <div className="masthead clearfix">
                <div className="inner">
                    <h3 className="masthead-brand">React + Redux Address Book</h3>
                    <nav>
                        <ul className="nav masthead-nav">
                            <li className="dd">
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/pnl'>Personal</Link>
                            </li>
                            <li>
                                <Link to='/company'>Company</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

//
// GlobalHeader.propTypes = {
//     dispatch: React.PropTypes.func
// }
//
// GlobalHeader.contextTypes = {
//   router: React.PropTypes.object
// }
//
// function mapStateToProps(state) {
//   return {
//     app: state.app
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     appAction: bindActionCreators(appAction, dispatch)
//   }
// }
//
//
// export default connect(
//   mapStateToProps,
//   null
// )(GlobalHeader)


export default GlobalHeader;
