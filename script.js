//your JS code here. If required.
const inputText = document.querySelector("#text");
const delay = document.querySelector("#delay");
const btn = document.querySelector("#btn");

const output = document.querySelector("#output");

async function submit () {
    let textInput = inputText.value;
    let timeDelay = parseInt(delay.value);

    //console.log(timeDelay);

    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(textInput);
        },delay);
    });

    let result = await promise;

    output.innerHTML = result;
}

btn.addEventListener("click", submit);
