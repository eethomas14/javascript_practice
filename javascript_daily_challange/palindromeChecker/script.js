const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
    const word = document.querySelector(".input-text").value;
    const len = word.length;
    for (let i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            result.innerHTML = `${word.toUpperCase()} is not a palindrome`;
        }else{
            result.innerHTML = `${word.toUpperCase()} is a palindrome`;
        }
    }

}

