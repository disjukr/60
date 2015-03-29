// 2015.3.29
// https://twitter.com/Code_60/status/582135263511461889

function sortProp(obj) {
    var newObj = {};
    Object.keys(obj).sort().forEach(function (key) {
        newObj[key] = obj[key];
    });
    return newObj;
}

/*
var obj = {c: null, b: null, a: null};
sortProp(obj); //=> {a: null, b: null, c: null}
*/
