/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appAction from 'actions/appAction'

import './PersonalView.scss'


export class PersonalView extends React.Component<void, Props, void> {

    constructor(props) {
        super(props);

        console.log(this.props);
    }

    render () {
        return (
            <div className="personal-view">
                <h4 className="cover-heading">個人リスト</h4>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>1</th>
                                <th>1</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>



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

PersonalView.propTypes = {
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
)(PersonalView)
