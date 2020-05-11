//设置字体大小
function set_size() {
    $("html").css({"font-size": $(window).width() >= 750 ? 20 : ($(window).width() / 750 * 23)})
}
$(window).resize(set_size);

$(function () {
    set_size();
    //首页轮播
    var swiper1=new Swiper('#swiper1',{
        autoplay:{
            disableOnInteraction:false,
            delay:5500
        },
        loop: true,
        speed:1000,
        on:{
            slideChangeTransitionStart:function (event) {
                var that = this;
                $('.swiper-slide').each(function (index, element) {
                    if ($(element).attr('data-swiper-slide-index') == that.realIndex){
                        $(element).find('.banner_txt').addClass('fadeInRight')
                    } else {
                        $(element).find('.banner_txt').removeClass('fadeInRight')
                    }
                })
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    //员工风采轮播
    var swiper2=new Swiper('#swiper2',{
        slidesPerView: 3,
        autoplay:{
            disableOnInteraction:false,
            delay:5500
        },
        loop: true,
        speed:1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    /*管理团队内容显示消失*/
    $('.open').each(function () {
        $(this).toggle(function () {
            $(this).addClass('change');
            $(this).parent('.open_icon').parent('.item').next().slideDown();
        },function () {
            $(this).removeClass('change').addClass('add_icon');
            $(this).parent('.open_icon').parent('.item').next().slideUp();
        })
    })

    //加入我们招聘要求
    $('.close').click(function () {
        $(".popup").hide();
    })

    $('.PrimaryJava').click(function () {
        $("#PrimaryPopup").show();
    })
    $('.MiddleJava').click(function () {
        $("#MiddlePopup").show();
    })
    $('.TestJob').click(function () {
        $("#TestPopup").show();
    })
    $('.Operation').click(function () {
        $("#OperationPopup").show();
    })
    $('.CreditLoan').click(function () {
        $("#LoanPopup").show();
    })
    $('.AccountMan').click(function () {
        $("#AccountManPopup").show();
    })
    $('.AccountGroup').click(function () {
        $("#AccountGroupPopup").show();
    })

    /*手机导航显示消失*/
    $('.nav_icon').toggle(function () {
        $('.menu_mb').slideDown();
    },function () {
        $('.menu_mb').slideUp();
    });

    /*导航关于我们*/
   /* $('.first_nav_li').click(function () {
        $('.list').show();
    })*/
    $('.li_five').click(function () {
        $('.li_five').addClass('active');
        $('.li_five').siblings('li').removeClass('active');
    })
});
