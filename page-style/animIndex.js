const img = document.querySelectorAll('.aparecer');

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0){
            entry.target.style.animation = `aparecer 1s ${entry.target.dataset.delay} forwards ease-out`;
        }else{
            entry.target.style.animation = 'none';
        }
    })
})

img.forEach(image =>{
    observer.observe(image);
})