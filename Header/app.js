document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('main-header');
    const toggleBtn = document.getElementById('toggle-btn');

    toggleBtn.addEventListener('click', function () {
        // Toggle background color on button click
        header.style.backgroundColor = header.style.backgroundColor === 'rgb(51, 51, 51)' ? '#4CAF50' : '#333';
    });
});
