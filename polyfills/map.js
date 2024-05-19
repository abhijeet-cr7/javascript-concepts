Array.prototype.myMap = function(cb){
    let mappedArray = [];
    for(let i=0; i< this.length ; i++){
    mappedArray.push(cb(this[i], i, this))
    }
    return mappedArray;
}
