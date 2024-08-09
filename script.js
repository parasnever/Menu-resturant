document.addEventListener('DOMContentLoaded', function() {
    showPage(2); // Show the second image first

    let startX;
    document.querySelectorAll('.page').forEach(page => {
        page.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
        });

        page.addEventListener('touchend', function(e) {
            let endX = e.changedTouches[0].clientX;
            if (startX > endX + 50) { // Swipe left
                togglePage();
            } else if (startX < endX - 50) { // Swipe right
                togglePage(true);
            }
        });

        page.addEventListener('click', function() {
            togglePage();
        });
    });
});

let currentPage = 2;

function showPage(pageNumber) {
    var pages = document.querySelectorAll('.page');
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');

    pages.forEach(function(page) {
        page.style.display = 'none';
    });

    document.getElementById('page' + pageNumber).style.display = 'block';

    if (pageNumber === 1) {
        btn1.classList.add('hidden');
        btn2.classList.remove('hidden');
    } else {
        btn1.classList.remove('hidden');
        btn2.classList.add('hidden');
    }

    currentPage = pageNumber;
}

function togglePage(reverse = false) {
    let nextPage = reverse ? (currentPage === 1 ? 2 : 1) : (currentPage === 2 ? 1 : 2);
    showPage(nextPage);
}
