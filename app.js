//延遲3秒執行function
const introAnimation = document.querySelector("#introAnimation");
setTimeout(function () {
  introAnimation.style.opacity = 0;
  introAnimation.style.zIndex = -5; //移到最下方
}, 2000);

const menuShowBtn = document.querySelector("#menuShowBtn");
const menuHideBtn = document.querySelector("#menuHideBtn");
const overlayMenu = document.querySelector(".overlayMenu");
const fixedMenuBtn = document.querySelector("#fixedMenuBtn");
const overlayOrder = document.querySelector(".overlayOrder");
const fixedOrderBtn = document.querySelector("#fixedOrderBtn");
const orderHideBtn = document.querySelector("#orderHideBtn");
const orderBtn = document.querySelector(".orderBtn");
const orderBtn2 = document.querySelector(".orderBtn2");

menuShowBtn.addEventListener("click", () =>
  overlayMenu.classList.add("showOverlay")
);

fixedMenuBtn.addEventListener("click", () =>
  overlayMenu.classList.add("showOverlay")
);

menuHideBtn.addEventListener("click", () =>
  overlayMenu.classList.remove("showOverlay")
);

fixedOrderBtn.addEventListener("click", () =>
  overlayOrder.classList.add("showOverlayOrder")
);

orderBtn.addEventListener("click", () => {
  overlayOrder.classList.add("showOverlayOrder");
});

orderBtn2.addEventListener("click", () => {
  overlayOrder.classList.add("showOverlayOrder");
});

orderHideBtn.addEventListener("click", () => {
  overlayOrder.classList.remove("showOverlayOrder");
});
