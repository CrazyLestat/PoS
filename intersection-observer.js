const sections = document.querySelectorAll('section');

const options = {
    root: null,
    threshold: 0,
    rootMargin: '-50px'
}
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove('is-visible');
            return;
        } else {
            entry.target.classList.add('is-visible');

        }
        
    });
}, options)

sections.forEach(section => {
    observer.observe(section);
});
