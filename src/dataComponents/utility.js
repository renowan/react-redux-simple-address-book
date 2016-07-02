export function getKeyMap(list, key){
    return list.reduce((map, item)=> map.set(item[key], item), new Map());
}

export function recoveryKeyMap(keyMap){
    var _newList = [];
    for(const v of keyMap.values()){
    	_newList.push(v);
    }
    return _newList;
}


