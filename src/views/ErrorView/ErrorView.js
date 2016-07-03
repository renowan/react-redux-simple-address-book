/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import * as appAction from 'actions/appAction'


export class HomeView extends React.Component<void, Props, void> {

    constructor(props) {
        super(props);

        console.log(this.props);
    }

    render () {
        return (
            <div className="home-view">
                <h1 className="cover-heading">Page No Find.</h1>
                <p className="lead-txt">
                    ページが見つかりません。<br/>Routerに設定したパス以外はここに飛ばす。
                </p>
            </div>
        )
    }
}

HomeView.propTypes = {
    dispatch: React.PropTypes.func
}

function mapStateToProps(state) {
  return {
    app: state.app
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appAction: bindActionCreators(appAction, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)
