const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Prevent Default
const anchors = $$('a');
anchors.forEach(anchor => {
    anchor.onclick = link => {
        if (!anchor.classList.contains('copyright-link')
            && !anchor.classList.contains('scroll-top-btn')
            && !anchor.classList.contains('nav-logo'))
            link.preventDefault();
    }
})
//Active link
const navLinks = $$('.nav .link');
navLinks.forEach(function (navLink, index) {
    navLink.onclick = function () {
        //Add active
        $('.link.active').classList.remove('active');
        this.classList.add('active');
        //Hien thi va an sub-nav khi click category-nav
        if (this.classList.contains('category-nav') && this.classList.contains('active')) {
            this.classList.toggle('open-menu');
            if (this.classList.contains('open-menu')) {
                $('.sub-nav').style.maxHeight = '500px';
                $('.category-nav .icon').classList.replace('fa-caret-down', 'fa-caret-up');
                $('#slider').onclick = function () {
                    navLink.classList.remove('open-menu');
                    $('.sub-nav').style.maxHeight = '0';
                    $('.category-nav .icon').classList.replace('fa-caret-up', 'fa-caret-down');
                }
            }
            else {
                $('.sub-nav').style.maxHeight = '0';
                $('.category-nav .icon').classList.replace('fa-caret-up', 'fa-caret-down');
            }
        }
        else {
            $('.category-nav').classList.remove('open-menu');
            $('.sub-nav').style.maxHeight = '0';
            $('.category-nav .icon').classList.replace('fa-caret-up', 'fa-caret-down');
        }
    }
})
mobileNavLinks = $$('.mobile-nav .link')
mobileNavLinks.forEach(mobileNavLink => {
    mobileNavLink.onclick = () => {
        $('#mobile-header').style.width = "0px";
        $('#main').classList.remove('cover');
    }
})
//Hien thi va an mobile nav khi click nut list
const openMenu = $('button.open-menu');
const closeMenu = $('button.close-menu');

openMenu.onclick = function () {
    $('#mobile-header').style.width = '260px';
    $('#main').classList.add('cover');
}
closeMenu.onclick = function () {
    $('#mobile-header').style.width = "0px";
    $('#main').classList.remove('cover');
}
//Active btn
const activeBtns = $$('.btn');
activeBtns.forEach(btn => {
    btn.ondragend = btn.onmouseup = function () {
        this.classList.add('off-active');
        setTimeout(function () {
            $('.btn.off-active').classList.remove('off-active');
        }, 200);
    }
})
//Enter contact infomation
const nameForm = $('.input-name-footer');
const emailForm = $('.input-email-footer');
nameForm.onmousedown = emailForm.onmousedown = () => {
    $('#footer .message-box').innerHTML = '';
}
const subscribeBtn = $('#footer .btn.subscribe');
subscribeBtn.onmousedown = () => {
    console.log('clicked');
    let message = '<span style="color: #2aff00; font-size: 0.8rem;">Cảm ơn bạn đã theo dõi</span>';
    if (nameForm.value === '' || emailForm.value === '')
        message = '<span style="color: #ff4b4b; font-size: 0.8rem;">Không được để trống tên và email</span>';

    $('#footer .message-box').innerHTML = message;
}
//Scroll Top Btn
const scrollTop = $('.scroll-top-btn');
window.addEventListener("scroll", () => {
    if (window.scrollY >= 1200)
        scrollTop.style.display = 'flex';
    else
        scrollTop.style.display = 'none';
});