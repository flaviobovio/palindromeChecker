const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultP = document.getElementById("result");


function checkPalindrome(text){
  if (text.length===0){
    alert("Please input a value");
    return;
  }
  text = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedText = text.split("").reverse().join("");
  resultP.textContent = (text === reversedText) ? 'Is a palindrome' : 'Is not a palindrome';
}

checkBtn.addEventListener('click', () => {
  checkPalindrome(textInput.value);
});
