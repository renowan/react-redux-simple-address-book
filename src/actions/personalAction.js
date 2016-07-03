// 個人の好みでajaxはaxiosを使う
import axios from 'axios'

// axiosの設定
var axiosInstance = axios.create({
  timeout: 10000,
  headers: {'Content-Type':'application/json;charset=utf-8'}
});

// 要求のaction
export const PERSONAL_LOAD_JSON_REQUEST = 'PERSONAL_LOAD_JSON_REQUEST'
// データが取得できたaction
export const PERSONAL_LOAD_JSON_RECEIVE = 'PERSONAL_LOAD_JSON_RECEIVE'

export function loadJson(data) {
    return dispatch => {

        // jsonロード開始の合図
        // しくてもいい別に大丈夫。
        // ここはisLoadingを「true」にしたいからactionをなげる
        dispatch({
            type: PERSONAL_LOAD_JSON_REQUEST,
            data: null
        });

        axiosInstance.get('/json/dmmy-personal-list.json').then((response) => {

            // データ到着

            // 普通はこれを投げるけど、
            // Loadingしてるっぽく見せたいから
            // 遅延させる
            //
            // dispatch({
            //     type: PERSONAL_LOAD_JSON_RECEIVE,
            //     data: response.data
            // });

            setTimeout(
                function(){
                    dispatch({
                        type: PERSONAL_LOAD_JSON_RECEIVE,
                        data: response.data
                    })
                }
            , 2000);

        }).catch((err) => {
            console.log(err);
        });
    }
}

function jsonReceive(){
    console.log('9999999');
}
