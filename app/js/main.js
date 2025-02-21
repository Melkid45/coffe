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
    }else{
        $('.header__menu').removeClass('active')
        $('.header').removeClass('active')
    }
})


var splide = new Splide( '#program', {
    perPage: 1,
    rewind : true,
    arrows: false
  } );
  
  splide.mount();

  var splide = new Splide( '#popular', {
    perPage: 1,
    rewind : true,
    arrows: false
  } );
  
  splide.mount();
  var splide = new Splide( '#daily', {
    perPage: 1,
    rewind : true,
    arrows: false
  } );
  
  splide.mount();