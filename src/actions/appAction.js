import axios from 'axios'
// fetchの設定
axios({timeout: 2000});

export const APP_SET_NAME = 'APP_SET_NAME'

export function setName(data) {
    return {type: APP_SET_NAME, data}
}
