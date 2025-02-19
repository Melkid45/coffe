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

document.querySelector('.menu-recipes').addEventListener('click', function(e){
    document.querySelector('.menu-recipes').classList.toggle('li-active')
    document.querySelector('.menu__wrapper').classList.toggle('active')
})