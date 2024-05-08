// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        const targetSection = href.substring(href.indexOf('#') + 1);
        const targetFile = targetSection + '.html';

        // Load content from target file
        fetch(targetFile)
            .then(response => response.text())
            .then(data => {
                document.querySelector('.main-content').innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
    });
});
