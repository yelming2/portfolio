const myMobileMenu = document.getElementById("my-mobile-header");

function openMobileMenu() {
    myMobileMenu.classList.add("open");
}

function closeMobileMenu() {
    myMobileMenu.classList.remove("open");
}

// 모바일 메뉴 열기 버튼
const openButton = document.querySelector(".open-button");
openButton.addEventListener("click", openMobileMenu);

// 모바일 메뉴 닫기 버튼
const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", closeMobileMenu);

// 페이지 로드 시 메뉴 닫기
window.addEventListener("load", () => {
    closeMobileMenu();
});
