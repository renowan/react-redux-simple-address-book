/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as companyAction from 'actions/companyAction'
import {SplitButton, DropdownButton, MenuItem} from 'react-bootstrap'
import './CompanyView.scss'


export class CompanyView extends React.Component<void, Props, void> {

    constructor(props) {
        super(props);
        this.state = {
            areaFilter: 'なし'
        }
        this.onSelectFilter = this.onSelectFilter.bind(this);
    }

    componentWillMount() {
        // jsonをロード
        this.props.companyAction.loadJson();
    }

    onSelectFilter(eventKey){
        this.setState({areaFilter: eventKey});
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

            // filter処理
            let tableData = [];
            let areaFilter = this.state.areaFilter;

            if(areaFilter === 'なし'){
                tableData = this.props.company.list;
            }else{
                this.props.company.list.map((elm, index) => {
                    if(elm.area === areaFilter){
                        tableData.push(elm);
                    }
                });
            }

            // テーブルのtrを生成
            let tableList = tableData.map((elm, index) => {
                return (
                    <tr key={`list-${index}`}>
                        <td>{elm.id}</td>
                        <td>{elm.name}</td>
                        <td>{elm.area}</td>
                        <td>{elm.owner}</td>
                        <td>{elm.gdp}</td>
                    </tr>
                );
            });

            return (
                <div className="company-view">

                    <div>
                        <div className="pull-left">
                            <h4 className="cover-heading">企業リスト - 総社数: {this.props.company.list.length}{' '}</h4>
                        </div>
                        <div className="pull-right">
                            フィルター{' '}
                            <DropdownButton bsStyle={'default'} bsSize={'small'} title={areaFilter} key={1} id={`split-button-basic`} onSelect={this.onSelectFilter}>
                              <MenuItem eventKey="なし">なし</MenuItem>
                              <MenuItem eventKey="陸奥国">陸奥国</MenuItem>
                              <MenuItem eventKey="上総国">上総国</MenuItem>
                              <MenuItem eventKey="越後国">越後国</MenuItem>
                              <MenuItem eventKey="加賀国">加賀国</MenuItem>
                              <MenuItem eventKey="肥後国">肥後国</MenuItem>
                            </DropdownButton>
                        </div>

                    </div>


                    <table className="table">
                        <thead>
                            <tr>
                                <th className="id">ID</th>
                                <th className="name">藩名</th>
                                <th className="area">国</th>
                                <th className="owner">代表</th>
                                <th className="gdp">石高</th>
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
