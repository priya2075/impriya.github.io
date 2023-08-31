//==================================================================================
// Floating navigation bar
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 10) {
        navbar.classList.add("floatingNav");
    } else {
        navbar.classList.remove("floatingNav");
        
    }
});


$(() => {
    // Masonry Grids
    const masonrySettings = [
        { container: '.gridtrex', item: '.grid-item', columnWidth: 3 },
        { container: '.vidtrex', item: '.vid-item', columnWidth: 2 },
    ];

    masonrySettings.forEach(({ container, item, columnWidth }) => {
        const $container = $(container);
        $container.masonry({
            itemSelector: item,
            columnWidth,
            isFitWidth: true,
        });
    });

    const offset = 220;
    const duration = 500;

    $(window).scroll(() => {
        if ($(window).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    // Back-to-top button
    $('.back-to-top').click(event => {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration);
        $('.rightlinks a').removeClass('active');
        return false;
    });

    $(".videoBox").fitVids();
});
