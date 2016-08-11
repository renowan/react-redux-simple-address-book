import * as companyActions from 'actions/companyAction'


const initialState = {
    isLoading: false,
    list: [],
}

export default function company(state = initialState, action) {

    switch (action.type) {

        // JSONロード開始（Loadingを出す）
        case companyActions.COMPANY_LOAD_JSON_REQUEST:
            return Object.assign({}, state, {
                isLoading: true,
            });

        // JSON取得できた、listを代入＆Loadingを消す
        case companyActions.COMPANY_LOAD_JSON_RECEIVE:
            return Object.assign({}, state, {
                list: action.data,
                isLoading: false,
            });

        default:
          return state
    }

}
