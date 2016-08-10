// EditBox

import React, { Component } from 'react'

class EditBox extends Component {
    constructor (props) {
        super(props)

        this.state = {
            tel: null
        }

        this._onChange = this._onChange.bind(this);
        this.save = this.save.bind(this);
    }

    _onChange(value){
        console.log(value);
    }

    save(){

    }

    render () {

        console.log(this.state.tel);

        const people = this.props.people;

        if(this.props.people){
            return (
                <div className="edit">
                    <h4>編集</h4>

                    <div className="info">
                        名前： {people.name} <br/>
                        官位：{people.kani}<br/>
                        年齢：{people.age}<br/>
                    </div>

                    <label>電話番号</label>
                    <div className="form-inline">
                        <div className="form-group">
                            <label className="sr-only">電話番号</label>
                            <input type="text" className="form-control" placeholder="電話番号" value={this.state.tel} onChange={this._onChange} />
                        </div>
                        {' '}
                        <button className="btn btn-default" onClick={this.save}>保存</button>
                    </div>
                </div>
            );
        }else{
            return <div className="edit"></div>
        }

    }
}

EditBox.propTypes = {
    people: React.PropTypes.object
}

export default EditBox
