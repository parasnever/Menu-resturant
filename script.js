document.addEventListener('DOMContentLoaded', function() {
    showPage(1);
});

function showPage(pageNumber) {
    var pages = document.querySelectorAll('.page');
    var button = document.getElementById('btn1');
    
    pages.forEach(function(page) {
        page.style.display = 'none';
    });

    document.getElementById('page' + pageNumber).style.display = 'block';

    if (pageNumber === 1) {
        button.onclick = function() { showPage(2); };
        button.innerHTML = '&lt; 2 &gt;';
    } else {
        button.onclick = function() { showPage(1); };
        button.innerHTML = '&lt; 1 &gt;';
    }
}
