import * as personalActions from 'actions/personalAction'

const initialState = {
    isLoading: false,
    list: [],
}

export default function personal(state = initialState, action) {

    switch (action.type) {

        // JSONロード開始（Loadingを出す）
        case personalActions.PERSONAL_LOAD_JSON_REQUEST:
            return Object.assign({}, state, {
                isLoading: true,
            });

        // JSON取得できた、listを代入＆Loadingを消す
        case personalActions.PERSONAL_LOAD_JSON_RECEIVE:
            return Object.assign({}, state, {
                list: action.data,
                isLoading: false,
            });

        // Telの更新
        case personalActions.PERSONAL_UPDATA_TEL:
            return Object.assign({}, state, {
                list: action.data,
            });

        default:
          return state
    }

}
