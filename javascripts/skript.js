

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



//==================================================================================
if (window.location.pathname === "/index.html") {
    window.location.href = "https://iampriya.com/";
}



//==================================================================================
// Highlight active element
let lastId;
const topMenu = $("#navbar .rightlinks");
const topMenuHeight = topMenu.outerHeight() + 1;
const menuItems = topMenu.find("a");

// Function to scroll to a specific section
function scrollToElement(clickedLink, id) {
  const offsetTop = $("#" + id).offset().top - topMenuHeight + 1;
  $("html, body").animate({
    scrollTop: offsetTop
  }, 850);
  
  menuItems.removeClass("active");
  $(clickedLink).addClass("active");
}

// Bind to scroll
$(window).scroll(function() {
  const fromTop = $(this).scrollTop() + topMenuHeight;
  
  // If user is at the top, remove all active classes
  if (fromTop <= topMenuHeight) {
    menuItems.removeClass("active");
    lastId = "";
    return;
  }

  // Check if the user has scrolled to the bottom of the page
  if ($(window).scrollTop() + $(window).height() === $(document).height()) {
    menuItems.removeClass("active");
    $(".rightlinks a[href='#videos']").addClass("active");
    return;
  }

  // Existing logic to add 'active' class based on section in viewport
  let cur = menuItems.map(function() {
    const href = $(this).attr("onclick").match(/scrollToElement\(this, '(.*)'\)/)[1];
    const item = $("#" + href);
    if (item.length && (item.offset().top <= fromTop) && (item.offset().top + item.height() > fromTop)) {
      return item;
    }
  });
  
  cur = cur[cur.length - 1];
  const id = cur && cur.length ? cur[0].id : "";
  
  if (lastId !== id) {
    lastId = id;
    
    menuItems.removeClass("active");
    menuItems.filter(function() {
      return $(this).attr("onclick").match(/scrollToElement\(this, '(.*)'\)/)[1] === id;
    }).addClass("active");
  }
});



//==================================================================================
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



//==================================================================================
// https://css-tricks.com/examples/MovingHighlight/
$(function() {
  var radialGlow = $("body").css("background-color"),
      x, y, xy, bgWebKit, bgMoz,
      lightColor = "rgba(62,112,127,0.17)",
      gradientSize = 415;
  
      // Basic Demo
      $('body').mousemove(function(e) {
  
          x  = e.pageX - this.offsetLeft;
          y  = e.pageY - this.offsetTop;
          xy = x + " " + y;
  
          bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + lightColor + "), to(rgba(30, 45, 50,0.0))), " + radialGlow;
          bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + radialGlow + " " + gradientSize + "px)";
  
          $(this)
              .css({ background: bgWebKit })
              .css({ background: bgMoz });
  
      }).mouseleave(function() {
          $(this).css({ background: radialGlow });
      });
  });



//==================================================================================
// Get the current year
var currentYear = new Date().getFullYear();

// Find the element with the ID 'copyright-year' and set its text to the current year
document.getElementById('copyright-year').textContent = currentYear;

