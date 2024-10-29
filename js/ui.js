document.addEventListener('DOMContentLoaded', function () {
const mainMenuLink = document.getElementById('mainMenu').querySelectorAll('a');
const submenuContainer = document.getElementById('submenuContainer');
const submenuItems = submenuContainer.querySelectorAll('a');
// 서브 메뉴 표시 함수
function showSubMenu() {
    submenuContainer.style.display = 'block';
    mainMenuLink.forEach(link =>{
        link.setAttribute('aria-expanded', 'true');
});
}

// 서브 메뉴 숨김 함수
function hideSubMenu() {
    submenuContainer.style.display = 'none';
    mainMenuLink.forEach(link => {
        link.setAttribute('aria-expanded', 'false');
});
}

// 메인 메뉴에 마우스를 올렸을 때 서브 메뉴 표시
mainMenuLink.forEach(link => {
    link.addEventListener('mouseover', showSubMenu);
    link.addEventListener('mouseleave', hideSubMenu);
    link.addEventListener('focus', showSubMenu);   // 키보드 접근성
    link.addEventListener('blur', hideSubMenu);     // 포커스 잃으면 숨기기
});
// 서브 메뉴에 마우스를 올렸을 때 계속 표시
submenuContainer.addEventListener('mouseover', showSubMenu);
submenuContainer.addEventListener('focus', showSubMenu);
// submenuContainer.addEventListener('blur', hideSubMenu);

// 서브 메뉴에서 마우스를 벗어났을 때 서브 메뉴 숨기기
submenuContainer.addEventListener('mouseout', hideSubMenu);

//키보드 내비게이션 처리
document.querySelectorAll('.sub_menu a').forEach(link => {
 // 포커스를 잃으면 서브 메뉴 숨기기
    link.addEventListener('focus', showSubMenu); // 포커스를 얻으면 서브 메뉴 보이기
});

//서브 메뉴의 마지막메뉴에 포커스아웃일 경우 서브메뉴 사라지기
submenuItems[submenuItems.length - 1].addEventListener('blur', ()=> {
    submenuContainer.style.display = 'none';
});

mainMenuLink.forEach((item, index) => {
    item.addEventListener('blur', (event) => {
        if (index === mainMenuLink.length - 1) {
            submenuContainer.style.display = 'block'; // 서브 메뉴 보이기
        }
    });
});

/* footer 사이트 링크 리스트 toggle*/
    const goSiteBtn = document.querySelector('.select_btn');
    const siteLinkList = document.querySelector('.site_list');

    function toggleSiteList(){
        if(siteLinkList.classList.contains('active')){
            siteLinkList.classList.remove('active');
        }else{
            siteLinkList.classList.add('active');
        }
    }
    goSiteBtn.addEventListener('click',toggleSiteList);

});
