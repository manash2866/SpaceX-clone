const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(section){
        //if observer is running
        if(section.isIntersecting){
            section.target.className = 'active';

        }
    });
    // transitions happens only when 80% of content is on page
}, {threshold: .8}); 

document.querySelectorAll('section').forEach(function(section){
    observer.observe(section);
});