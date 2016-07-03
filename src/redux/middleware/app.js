export default store => next => action => {

    if(action){
        // 共通の処理をここに書くとコード量が減るし
        // 管理が楽になる
    }

    return next(action);
};
