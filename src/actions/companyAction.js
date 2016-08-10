// 個人の好みでajaxはaxiosを使う
import axios from 'axios'

// axiosの設定
var axiosInstance = axios.create({
  timeout: 10000,
  headers: {'Content-Type':'application/json;charset=utf-8'}
});

// 要求のaction
export const COMPANY_LOAD_JSON_REQUEST = 'COMPANY_LOAD_JSON_REQUEST'
// データが取得できたaction
export const COMPANY_LOAD_JSON_RECEIVE = 'COMPANY_LOAD_JSON_RECEIVE'

let rootPath = __PROD__ ? '/react-redux-simple-address-book/' : '/';

export function loadJson(data) {
    return dispatch => {

        // jsonロード開始の合図
        // しくてもいい別に大丈夫。
        // ここはisLoadingを「true」にしたいからactionをなげる
        dispatch({
            type: COMPANY_LOAD_JSON_REQUEST,
            data: null
        });

        axiosInstance.get(`${rootPath}json/dmmy-company-list.json`).then((response) => {

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
                        type: COMPANY_LOAD_JSON_RECEIVE,
                        data: response.data
                    })
                }
            , 2000);

        }).catch((err) => {
            console.log(err);
        });
    }
}
