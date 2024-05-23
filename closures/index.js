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