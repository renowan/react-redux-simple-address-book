const initialState = {
    isLoading: false,
    list: [],
}

export default function app(state = initialState, action) {

    switch (action.type) {

        case 'PERSONAL_LOAD_JSON_REQUEST':
            return Object.assign({}, state, {
                isLoading: true,
            });

        case 'PERSONAL_LOAD_JSON_RECEIVE':
            return Object.assign({}, state, {
                list: action.data,
                isLoading: false,
            });

        default:
          return state
    }

}
