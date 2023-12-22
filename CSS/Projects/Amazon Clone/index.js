function fun(obj1, obj2){
    let res = {};
    for(let k1 in obj1){
        for(let k2 in obj2){  // d: 10
            if(k1 === k2 && obj1[k1] === obj2[k2]){
                console.log(k1, obj1[k1]);
                res[]
            }
        }
    }

    console.log(res);
}

const obj1 = {a:1, b:2, c:3, d:10, e:12, z:78};
const obj2 = {a:2, e:12, f:6, d:10};

fun(obj1, obj2);
