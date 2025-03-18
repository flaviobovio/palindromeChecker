const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultP = document.getElementById("result");


function checkPalindrome(text){
  if (text.length===0){
    alert("Please input a value");
    return;
  }
  cleanText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const cleanReversedText = cleanText.split("").reverse().join("");
  resultP.textContent = text + ' is ' + (cleanText === cleanReversedText ? '' : ' not ') + 'a palindrome';
}

checkBtn.addEventListener('click', () => {
  checkPalindrome(textInput.value);
  textInput.value = '';
});
