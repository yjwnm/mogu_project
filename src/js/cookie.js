 //对cookie进行增删改查
 let cookieobj = {
    addcookie: function(key, value, day) {
        let date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = key + '=' + encodeURIComponent(value) + ';expires=' + date;
    },
    getcookie: function (key) {
        let arr = decodeURIComponent(document.cookie).split('; ');
        for (let value of arr) {
            let newarr = value.split('=');
            if (key === newarr[0]) {
                return newarr[1];
            }
        }
    },
    delcookie: function (key) {
        addcookie(key, '', -1);
    }
}

function addcookie(key, value, times) {
    var d = new Date();
    d.setDate(d.getDate() + times);
    document.cookie = `${key}=${encodeURIComponent(value)};expires=${d}`;
}
let arr=[1,2,3,4];
let obj={
    a:1,
    b:2,
    c:3
};

//获取
function getcookie(key) {
    let arr = decodeURIComponent(document.cookie).split('; ');//解码后转换成数组
    for (let value of arr) {
        let newarr=value.split('=')
        for(let i=0;i<newarr.length;i++){
            if(newarr[0]===key){
                return newarr[1];
            }
        }
    }
}

//删除--将时间设置成过期时间
function delcookie(key){
    addcookie('name','',-1);//第二个参数value是什么不重要
}
delcookie('name');