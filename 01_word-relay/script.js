const number = Number(prompt("몇 명이 참가하나요?"));
const $button = document.querySelector("button");
const $input = document.querySelector("input");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");
let word; // 제시어
let newWord; // 새로 입력한 단어

const onClickButton = () => {
  if (!word || word[word.length - 1] === newWord[0]) {
    // 제시어가 없거나 올바르게 입력했을 때
    // 제시어(첫번째 순서)가 있는지 확인하는게 우선순위 높으므로 먼저 판별하도록 함
    word = newWord; // 제시어를 현재 단어로
    $word.textContent = word; // 화면에 띄우기
    const order = Number($order.textContent); // 현재 순서
    // 순서 정하기
    if (order + 1 > number) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
  } else {
    // 올바르게 입력하지 않았을때
    alert("올바르지 않은 단어입니다!");
  }

  // 위 과정이 다 수행됐을 때
  $input.value = ""; // 입력창 비우기
  $input.focus(); // 입력창 focus
};

const onInput = (event) => {
  newWord = event.target.value; // 현재 단어를 현재 input에 있는 단어로
};

$button.addEventListener("click", onClickButton);
$input.addEventListener("input", onInput);
