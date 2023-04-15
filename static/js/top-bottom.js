const goTopButton = document.querySelector("#go-top");
const goBottomButton = document.querySelector("#go-bottom");
const windowHeight = window.innerHeight;
const documentHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);

function toggleButtons() {
  if (documentHeight > windowHeight) {
    if (window.pageYOffset === 0) {
      goTopButton.style.display = "none";
      goBottomButton.style.display = "block";
    } else if (window.pageYOffset + windowHeight === documentHeight) {
      goTopButton.style.display = "block";
      goBottomButton.style.display = "none";
    } else {
      goTopButton.style.display = "block";
      goBottomButton.style.display = "block";
    }
  } else {
    goTopButton.style.display = "none";
    goBottomButton.style.display = "none";
  }
}

// 初次加载页面时判断
toggleButtons();

// 滚动时判断按钮状态
window.addEventListener("scroll", toggleButtons);

// 点击按钮进行跳转
goTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
goBottomButton.addEventListener("click", function () {
  window.scrollTo({
    top: documentHeight - windowHeight,
    behavior: "smooth",
  });
});
