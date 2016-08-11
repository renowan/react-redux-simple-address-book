/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import * as appAction from 'actions/appAction'

import './HomeView.scss'


export class HomeView extends React.Component<void, Props, void> {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="home-view">
                <h1 className="cover-heading">Try React, Redux</h1>
                <p className="lead-txt">
                    <a href="https://github.com/davezuko/react-redux-starter-kit">davezuko/react-redux-starter-kit</a>をベースに<br/>
                        React, Reduxでアドレス帳を作ってみる。データは静的JSONファイルから取得する。<br/>
                        保存部分はダミー通信なので永続化されない。
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
