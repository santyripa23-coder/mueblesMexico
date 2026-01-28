document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const images = slider.querySelectorAll('.slider-img');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');

        let current = 0;

        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
        }

        prevBtn.addEventListener('click', () => {
            current = (current - 1 + images.length) % images.length;
            showImage(current);
        });

        nextBtn.addEventListener('click', () => {
            current = (current + 1) % images.length;
            showImage(current);
        });
    });
});
