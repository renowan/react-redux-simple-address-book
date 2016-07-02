import * as appActionTypes from 'actions/appAction'


const initialState = {
    name: 'abc',
    age: 99
}

export default function app(state = initialState, action) {

    switch (action.type) {

        case appActionTypes.APP_SET_NAME:
            return Object.assign({}, state, {
                name: action.data,
            });

        default:
          return state
    }

}
