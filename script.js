document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;

    function showNextItem() {
        // Hide all items
        items.forEach(item => {
            item.style.display = 'none'
        
        });

        // Show the current item with a slide-in effect
        items[index].style.display = 'block';

        // Move to the next item
        index = (index + 1) % items.length;
    }

    // Initially hide all items except the first one
    items.forEach((item, idx) => {
        if (idx !== 0) {
            item.style.display = 'none'
        }
    });

    setInterval(showNextItem, 3500); // Change every 3 seconds
});


document.addEventListener('DOMContentLoaded', function() {
    const infoLink = document.getElementById('show-info-link');
    const infoList = document.getElementById('info-list');

    infoLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (infoList.classList.contains('hidden')) {
            infoList.classList.remove('hidden');
        } else {
            infoList.classList.add('hidden');
        }
    });
});
