function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}


document.querySelector('.top-btn').addEventListener('click', function(e){
    window.scrollTo(0,0)
})

// document.querySelector('.menu-recipes').addEventListener('click', function(e){
//     document.querySelectorAll('.menu-recipes').classList.toggle('li-active')
//     document.querySelectorAll('.menu__wrapper').classList.toggle('active')
// })
$('.menu-recipes').on('click', function(e){
    $(this).toggleClass('li-active')
    $(this).children('.menu__wrapper').toggleClass('active')
})
$('.hamburger').on('click', function(e){
    if ($(this).children('input').prop('checked')){
        $('.header__menu').addClass('active')
        $('.header').addClass('active')
        $('body').addClass('hidden')
    }else{
        $('.header__menu').removeClass('active')
        $('.header').removeClass('active')
        $('body').removeClass('hidden')
    }
})


var splideProg = new Splide( '#program', {
    perPage: 1,
    rewind : true,
    arrows: false
  } );
  splideProg.on( 'mounted', function () {
    $('#program').children('.splide__pagination').children('li').each(function(e){
        if ($(this).children('.splide__pagination__page').hasClass('is-active')){
            $(this).next('li').children('.splide__pagination__page').addClass('medium')
            $(this).prev('li').children('.splide__pagination__page').addClass('medium')
        }
    })
  } );
  splideProg.mount();
  splideProg.on( 'move', function () {
    $('#program').children('.splide__pagination').children('li').each(function(e){
        if ($(this).children('.splide__pagination__page').hasClass('is-active')){
            $(this).next('li').children('.splide__pagination__page').addClass('medium')
            $(this).prev('li').children('.splide__pagination__page').addClass('medium')
            $(this).next('li').next('li').children('.splide__pagination__page').removeClass('medium')
            $(this).prev('li').prev('li').children('.splide__pagination__page').removeClass('medium')
        }
    })
  } );
  var splidePop = new Splide( '#popular', {
    perPage: 1,
    rewind : true,
    arrows: false
  } );
  splidePop.on( 'mounted', function () {
    $('#popular').children('.splide__pagination').children('li').each(function(e){
        if ($(this).children('.splide__pagination__page').hasClass('is-active')){
            $(this).next('li').children('.splide__pagination__page').addClass('medium')
            $(this).prev('li').children('.splide__pagination__page').addClass('medium')
        }
    })
  } );
  splidePop.mount();
  splidePop.on( 'move', function () {
    $('#popular').children('.splide__pagination').children('li').each(function(e){
        if ($(this).children('.splide__pagination__page').hasClass('is-active')){
            $(this).next('li').children('.splide__pagination__page').addClass('medium')
            $(this).prev('li').children('.splide__pagination__page').addClass('medium')
            $(this).next('li').next('li').children('.splide__pagination__page').removeClass('medium')
            $(this).prev('li').prev('li').children('.splide__pagination__page').removeClass('medium')
        }
    })
  } );
  var splideDay = new Splide( '#daily', {
    perPage: 1,
    rewind : true,
    arrows: false
  } );
  splideDay.on( 'mounted', function () {
    $('#daily').children('.splide__pagination').children('li').each(function(e){
        if ($(this).children('.splide__pagination__page').hasClass('is-active')){
            $(this).next('li').children('.splide__pagination__page').addClass('medium')
            $(this).prev('li').children('.splide__pagination__page').addClass('medium')
        }
    })
  } );
  splideDay.mount();
  splideDay.on( 'move', function () {
    $('#daily').children('.splide__pagination').children('li').each(function(e){
        if ($(this).children('.splide__pagination__page').hasClass('is-active')){
            $(this).next('li').children('.splide__pagination__page').addClass('medium')
            $(this).prev('li').children('.splide__pagination__page').addClass('medium')
            $(this).next('li').next('li').children('.splide__pagination__page').removeClass('medium')
            $(this).prev('li').prev('li').children('.splide__pagination__page').removeClass('medium')
        }
    })
  } );