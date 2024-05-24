function find(index){
    let a = []
    for(let i=0; i<1000000; i++){
        a[i] = i*i;
    }
    return a[index];
    // return function(index){
    //     return a[index];
    // }
}

// const closure = find();
console.time("6");
console.log(find(6)); 
console.timeEnd("6");

for(var i=0; i<3; i++){
    function Babu(i){
        setTimeout(() => {
            console.log(i, "i")
        }, 1000)
    }
    Babu(i);
}

var Module = (function(){
    function privateMethod(){
        console.log('private method');
    }
    return {publicMethod : function(){
        privateMethod();
        console.log("public method");
    }}
})();

Module.publicMethod();

function likeVideo(){
    let called = 0;
    return function subscribed(){
        if(called === 0){
            console.log("subscribed once");
            called++;
        }
        else{
            console.log("already subscribed");
        }
    }
}

const subscribed = likeVideo();
subscribed();
subscribed();
subscribed();
subscribed();
subscribed();
subscribed();