const buttonOne = document.querySelector(".header");
const pressedPara = document.querySelector(".pressed");
const triggeredPara = document.querySelector(".triggered");

let pressedCount = 0;
let triggeredCount = 0;

 const debouncedPolyfill = (callback, delay) => {
    let timeout;
    return function(...args){
        console.log(args, "args", timeout);
        if(timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(...args)
        },delay)
    }
}

let debounce = debouncedPolyfill(() => {
    ++triggeredCount;
    triggeredPara.innerHTML = `<p>Triggerd ${triggeredCount}</p>`;
}, 500)

buttonOne.addEventListener("click" , () => {
    ++pressedCount;
    pressedPara.innerHTML = `<p>Count ${pressedCount}</p>`; 
    debounce("hello") 
})

