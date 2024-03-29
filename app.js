const btns = document.querySelectorAll(".btn");
let birinchiBtn = null;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (birinchiBtn) {
      if (birinchiBtn !== btn && birinchiBtn.textContent === btn.textContent) {
        btn.style.background = "red";
      } else {
        birinchiBtn.style.background = "green";
      }
      birinchiBtn = null;
    } else {
      btn.style.background = "red";
      birinchiBtn = btn;
    }
  });
});
const h3El = document.querySelectorAll("h3");
const answersBtns = document.querySelectorAll(".btn");
const btn_s = document.querySelectorAll(".btn_s");

function startGame() {
  let num1 = generatNumber(100);
  let num2 = generatNumber(100);
  const result = num1 + num2;

  h3El.forEach((el) => {
    el.textContent = `${num1} + ${num2} = ?`;
  });

  function generatNumber(to) {
    return Math.ceil(Math.random() * to);
  }
  const answers = [result - 2, result + 2, result + 1];
  answers[generatNumber(3) - 1] = result;

  btn_s.forEach((btn, index) => {
    btn.textContent = answers[index];
  });
}

startGame();
