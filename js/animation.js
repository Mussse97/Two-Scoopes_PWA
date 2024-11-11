// Intersection observer för 1 content i varje 100vh

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log(entry);
        if (entry.isIntersecting) {
        entry.target.classList.add("show");
        } else {
        entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
    observer.observe(el);
});

