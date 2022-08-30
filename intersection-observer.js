const sectionOne = document.querySelector('.section1');
const sections = document.querySelectorAll('section')
const options = {
    root: null, //it is the viewport
    treshold: 0.25,
    rootMargin: '-150px' //margin on viewport - distance on when to fire the comand
};
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        }
        entry.target.classList.toggle('.is-visible');
        observer.unobserve(entry.target);
    })
}, options);

observer.observe(sectionOne);

sections.forEach(section => {
    observer.observe(section);
});