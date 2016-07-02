/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appAction from 'actions/appAction'

import './CompanyView.scss'


export class CompanyView extends React.Component<void, Props, void> {

    constructor(props) {
        super(props);

        console.log(this.props);
    }

    render () {
        return (
            <div className="personal-view">
                <h4 className="cover-heading">会社リスト</h4>



                <p className="lead-txt">
                    <a href="https://github.com/davezuko/react-redux-starter-kit">davezuko/react-redux-starter-kit</a>をベースに<br/>
                        React, Reduxでアドレス帳を作ってみる。データは静的JSONファイルから取得する。<br/>
                        保存部分はダミー通信なので永続化されない。
                </p>
                <p className="lead">
                    <a href="#" className="btn btn-default">Learn more</a>
                </p>
            </div>
        )
    }
}

CompanyView.propTypes = {
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
)(CompanyView)
