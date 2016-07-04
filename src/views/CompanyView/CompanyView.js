/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as companyAction from 'actions/companyAction'

import './CompanyView.scss'


export class CompanyView extends React.Component<void, Props, void> {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    componentWillMount() {
        // jsonをロード
        this.props.companyAction.loadJson();
    }

    render () {

        // Loadingしているか
        let isLoading = this.props.company.isLoading;

        if(isLoading){

            // Loading中これを出す
            return (
                <p className="loading">
                    Loading...
                </p>
            );
        }else {

            // Loadingが終わったらコンテンツを出す

            // テーブルのtrを生成
            let tableList = this.props.company.list.map((elm, index) => {
                return (
                    <tr key={`list-${index}`}>
                        <td>{elm.id}</td>
                        <td>{elm.name}</td>
                        <td>{elm.owner}</td>
                        <td>{elm.gdp}</td>
                        <td>{elm.tel}</td>
                    </tr>
                );
            });

            return (
                <div className="personal-view">
                    <h4 className="cover-heading">企業リスト - 総社数: {this.props.company.list.length}</h4>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="id">ID</th>
                                    <th className="name">藩名</th>
                                    <th className="kani">代表</th>
                                    <th className="age">石高</th>
                                    <th className="tel">電話番号</th>
                                </tr>
                            </thead>
                            <tbody>

                                {/*生成したtrを入れる*/}
                                {tableList}

                            </tbody>
                        </table>

                </div>
            )

        }
    }
}

CompanyView.propTypes = {
    dispatch: React.PropTypes.func
}

function mapStateToProps(state) {
  return {
    company: state.company
  }
}

function mapDispatchToProps(dispatch) {
  return {
    companyAction: bindActionCreators(companyAction, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyView)
