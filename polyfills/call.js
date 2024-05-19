function getName(adderess= " " , age = 0){
    console.log(this.firstName + " " + this.lastName + ' of age ' + age + ' lives in ' + adderess) 
}

let obj = {
    firstName : "Abhijeet",
    lastName : "Mukherjee"
}

getName.call(obj, "Kadru", 27)

Function.prototype.myCall = function(context, ...args){
    console.log(this, "this", context)
    if(typeof this !== "function"){
        throw new Error(`${this} is not a function`)
    }
    context.fn = this;
    context.fn(...args)
}

getName.myCall(obj);

let obj2 = {
    firstName : "Abhijeet",
    lastName : "Mukherjee",
    getFullName :  () => {
        console.log(this , "this");
        console.log(this.firstName + this.lastName)
    }
}
obj2.getFullName()