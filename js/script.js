const footerDropdown = document.querySelectorAll('section.footer .row .column .group.drop');

footerDropdown.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdown.children[1].classList.toggle('show');
        dropdown.children[0].classList.toggle('translate');
    });
});