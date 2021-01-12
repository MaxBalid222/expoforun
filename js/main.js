$(function () {
    new WOW().init();


        $('.img__search',).click(function(event){
            $('.header__search-input').toggleClass('header__search-input-activ');
            $('.header__search-button').toggleClass('activ');
            $('.img__search').toggleClass('no-activ');
        });

        $('.header__search-button',).click(function(event){
            $('.header__search-input').toggleClass('header__search-input-activ');
            $('.header__search-button').toggleClass('activ');
            $('.img__search').toggleClass('no-activ');
        });

        $('.header__nav-bottom',).click(function(event){
            $('.header__nav').toggleClass('header__nav-activ');
            $('.header__nav-link').toggleClass('header__nav-link-activ');
            $('body').toggleClass('lock');
        });

    });
    $('.footer__item-title').on('click', function () {

        $('.footer__item-list').removeClass('footer__item-list-activ');
        $(this).parent().toggleClass('footer__item-list-activ');
    
    });

});

