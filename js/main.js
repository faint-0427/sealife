

const banner_list = new Swiper(".banner_list", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    effect: 'fade',
    speed: 500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

//xb_list 초기화
const xb_list = new Swiper(".xb_list", {
    effect: 'fade',
    speed: 500,
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

//concert_list 초기화
const concert_list = new Swiper(".concert_list", {
    effect: 'fade',
    speed: 500,
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

//review_list 초기화
const review_list = new Swiper(".review_list", {
    direction: 'vertical',
    speed: 3000,
    loop: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});


const review_img_list = new Swiper(".review_img_list", {
    slidesPerView: 6.5,
    spaceBetween: 30,

    loop: true,

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 3000,
});
const review_video_list = new Swiper(".review_video_list", {
    slidesPerView: 6.5,
    

    spaceBetween: 30,
    loop: true,

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    speed: 5000,
});

/* [tab depth3 활성화] 잘 안되는 부분 */
$(".tab_btn1 button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    console.log(num);
    $(".tab_list1 .tab_contents").eq(num).fadeIn().siblings().hide();
})
$(".tab_btn2 button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    console.log(num);
    $(".tab_list2 .tab_contents").eq(num).fadeIn().siblings().hide();
})
$(".tab_btn3 button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    console.log(num);
    $(".tab_list3 .tab_contents").eq(num).fadeIn().siblings().hide();
})

