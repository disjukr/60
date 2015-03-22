// 2015.3.15
// https://twitter.com/Code_60/status/577062012250796032

// http://en.wikipedia.org/wiki/Friday_the_13th 에 들어가서 console창을 열고

function fri13(input) {
    var output = [];
    $('.wikitable tr').each(function (i, v) {
        if ((new RegExp(input + '')).test($(v).text()))
            output.push(i);
    });
    return output;
}

// ex) fri13(2020); //=> [3, 11]
