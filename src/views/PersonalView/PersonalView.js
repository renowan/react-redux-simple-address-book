/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as personalAction from 'actions/personalAction'
import EditBox from './EditBox'
import './PersonalView.scss'


export class PersonalView extends React.Component<void, Props, void> {

    constructor(props) {
        super(props);

        this.state = {
            editTarget: undefined
        }

        this.edit = this.edit.bind(this);
    }

    // コンポーネントがマウントされる直前にこの関数が実行される
    // ページの最初に実行したいものはここに書くといいでしょう
    componentWillMount() {
        // jsonをロード
        this.props.personalAction.loadJson();
    }

    edit(id){
        console.log(id);
        this.props.personal.list.map((elm) => {
            if(elm.id === id){
                this.setState({editTarget: elm});
            }
        });

    }

    render () {

        // Loadingしているか
        let isLoading = this.props.personal.isLoading;

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
            let tableList = this.props.personal.list.map((elm, index) => {
                return (
                    <tr key={`list-${index}`}>
                        <td>{elm.id}</td>
                        <td>{elm.name}</td>
                        <td>{elm.kani}</td>
                        <td>{elm.age}</td>
                        <td>{elm.tel}</td>
                        <td><button className="btn btn-default btn-xs" onClick={()=>{this.edit(elm.id)}}>修正</button></td>
                    </tr>
                );
            });

            return (
                <div className="personal-view">
                    <h4 className="cover-heading">個人リスト - 人数: {this.props.personal.list.length}</h4>

                    <div className="row">
                        <div className="col-xs-8">

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="id">ID</th>
                                        <th className="name">名前</th>
                                        <th className="kani">官位</th>
                                        <th className="age">年齢</th>
                                        <th className="tel">電話番号</th>
                                        <th className="">編集</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/*生成したtrを入れる*/}
                                    {tableList}

                                </tbody>
                            </table>

                        </div>

                        <div className="col-xs-4">

                            <EditBox
                                people={this.state.editTarget}
                            />

                        </div>
                    </div>

                </div>
            )
        }
    }
}

PersonalView.propTypes = {
    dispatch: React.PropTypes.func
}

function mapStateToProps(state) {
  return {
    app: state.app,
    personal: state.personal
  }
}

function mapDispatchToProps(dispatch) {
  return {
    personalAction: bindActionCreators(personalAction, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalView)
