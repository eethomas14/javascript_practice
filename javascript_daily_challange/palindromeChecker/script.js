const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
    const word = document.querySelector(".input-text").value;
    const re = /[^A-Za-z0-9]/g;
    const wordReplaced = word.toLowerCase().replace(re, '');
    const len = wordReplaced.length;
    for (let i = 0; i < len/2; i++) {
        if (wordReplaced[i] !== wordReplaced[len - 1 - i]) {
            result.innerHTML = `${wordReplaced.toUpperCase()} is not a palindrome`;
        }else{
            result.innerHTML = `${wordReplaced.toUpperCase()} is a palindrome`;
        }
    }

}

