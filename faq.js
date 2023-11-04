const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach((item) => {
    const title = item.querySelector('.accordion__question');
    const content = item.querySelector('.accordion__answer');

    content.style.display = 'none';

    title.addEventListener('click', () => {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            title.classList.add('open');
        } else {
            content.style.display = 'none';
            title.classList.remove('open');
        }
    });
});