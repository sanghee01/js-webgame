const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $order = document.querySelector("#order");
const $word = document.querySelector("#word");
const number = Number(prompt("몇 명이 참가하나요?"));
let word; // 제시어
let newWord; // 현재 단어
let order = Number($order.textContent);
if (number) {
  const onClickButton = () => {
    if (
      newWord.length === 3 &&
      (!word || word[word.length - 1] === newWord[0])
    ) {
      word = newWord;
      $word.textContent = word;
      order++;
      if (order > number) order = 1;
      $order.textContent = order;
    } else {
      alert("올바르게 입력하지 않았습니다.");
    }
    $input.value = "";
    $input.focus();
  };
  const onInput = (e) => {
    newWord = e.target.value;
  };

  $button.addEventListener("click", onClickButton);
  $input.addEventListener("input", onInput);
}
