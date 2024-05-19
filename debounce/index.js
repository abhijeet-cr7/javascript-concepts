const buttonOne = document.querySelector(".header");
const buttonTwo = document.querySelector(".throttle");
const pressedPara = document.querySelector(".pressed");
const triggeredPara = document.querySelector(".triggered");
const throttledPara = document.querySelector(".throttlepressed");
const throttledTriggered = document.querySelector(".throttletriggered");

let pressedCount = 0;
let triggeredCount = 0;
let throttleCount = 0;
let triggeredThrottleCount = 0;

 const debouncedPolyfill = (callback, delay) => {
    let timeout;
    return function(...args){
        if(timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(...args)
        },delay)
    }
}

const throttlePolyfill = (callback, delay) => {
    let then = 0;
    return function(...args){
        let now = new Date().getTime();
        if((now -then)<delay) return;
        then = now;
        callback(...args);
    }
}

let debounce = debouncedPolyfill(() => {
    ++triggeredCount;
    triggeredPara.innerHTML = `<p>Triggerd ${triggeredCount}</p>`;
}, 500)

let throttle = throttlePolyfill(() => {
    ++triggeredThrottleCount,
    throttledTriggered.innerHTML = `<p> Throttle Triggered ${triggeredThrottleCount}`;
},1000)

buttonOne.addEventListener("click" , () => {
    ++pressedCount;
    pressedPara.innerHTML = `<p>Count ${pressedCount}</p>`; 
    debounce("hello") 
})

buttonTwo.addEventListener("click", () => {
    ++throttleCount;
    throttledPara.innerHTML = `<p>Count ${throttleCount}<p>`
    throttle("pubali")
})

