// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var webDesignBar = new ProgressBar.Circle(webDesign, {
    color: '#000000',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 35,
    trailWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#30bae7', width: 7 },
    to: { color: '#30bae7', width: 7 },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value + "%");
        }

    }
});
webDesignBar.text.style.fontFamily = '"Titillium Web", sans-serif';


var htmlCSSBar = new ProgressBar.Circle(htmlCSS, {
    color: '#000000',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 35,
    trailWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#d74680', width: 7 },
    to: { color: '#d74680', width: 7 },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value + "%");
        }

    }
});
htmlCSSBar.text.style.fontFamily = '"Titillium Web", sans-serif';


var graphicDesignBar = new ProgressBar.Circle(graphicDesign, {
    color: '#000000',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 35,
    trailWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#15c7a8', width: 7 },
    to: { color: '#15c7a8', width: 7 },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value + "%");
        }

    }
});
graphicDesignBar.text.style.fontFamily = '"Titillium Web", sans-serif';


var uiUXBar = new ProgressBar.Circle(uiUX, {
    color: '#000000',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 35,
    trailWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#eb7d4b', width: 7 },
    to: { color: '#eb7d4b', width: 7 },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value + "%");
        }

    }
});
uiUXBar.text.style.fontFamily = '"Titillium Web", sans-serif';


/**Custom Script */
$(window).on('resize scroll load', function () {
    if (window.innerWidth > 992) {
        webDesignBar.text.style.fontSize = '2.5rem';
        htmlCSSBar.text.style.fontSize = '2.5rem';
        graphicDesignBar.text.style.fontSize = '2.5rem';
        uiUXBar.text.style.fontSize = '2.5rem';
    }
    else if (window.innerWidth <= 768) {
        webDesignBar.text.style.fontSize = '2rem';
        htmlCSSBar.text.style.fontSize = '2rem';
        graphicDesignBar.text.style.fontSize = '2rem';
        uiUXBar.text.style.fontSize = '2rem';
    }
    else if (window.innerWidth <= 992) {
        webDesignBar.text.style.fontSize = '1.5rem';
        htmlCSSBar.text.style.fontSize = '1.5rem';
        graphicDesignBar.text.style.fontSize = '1.5rem';
        uiUXBar.text.style.fontSize = '1.5rem';
    }
});



$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll load', function () {
    /*Gets all the elements with the class*/
    $('.skillsProgress').each(function () {
        /*active color is the array with ids of all the element with the class*/
        var activeCard = $(this).attr('id');
        /*Triggered when element is in viewport*/
        if ($(this).isInViewport()) {
            if (activeCard == "webDesign")
                webDesignBar.animate(0.9);  // Number from 0.0 to 1.0
            else if (activeCard == "htmlCSS")
                htmlCSSBar.animate(0.75);  // Number from 0.0 to 1.0
            else if (activeCard == "graphicDesign")
                graphicDesignBar.animate(0.70);
            else
                uiUXBar.animate(0.85);
        }
    });
});

/**Custom Place Holder */
$(document).ready(function () {
    $('.input-required input, textarea').on('focus', function () {
        if (!$(this).parent('.input-required').find('label').hasClass('hide')) {
            $(this).parent('.input-required').find('label').addClass('hide');
        }
    });
    $('label').on('click', function () {
        //alert("label focus");
        $(this).parent('.input-required').find('input').focus();
        $(this).parent('.input-required').find('textarea').focus();
    });
    $('.input-required input, textarea').on('blur', function () {
        if ($(this).val() == '' && $(this).parent('.input-required').find('label').hasClass('hide')) {
            $(this).parent('.input-required').find('label').removeClass('hide');
        }
    });
});

/**Load More Button in portfolio*/
function loadMore(elementCardClass, numberToShow, buttonID) {

    var shown = 0;
    var element = document.getElementsByClassName(elementCardClass);


    for (var i = 0; i < element.length; i++) {
        var currentDisplay = element.currentStyle ? element.currentStyle.display : getComputedStyle(element[i], null).display;

        console.log("current status");
        console.log(typeof currentDisplay);

        if (currentDisplay.valueOf() == "none") {
            console.log(currentDisplay);

            shown++;
            element[i].style.display = "block";

            /**To allow element styling invoked by scrolling to show */
            window.scrollBy(0, 1);
            window.scrollBy(0, -1);

            if (i == element.length - 1) {
                document.getElementById(buttonID).style.display = "none";
            }
            else if (shown == numberToShow) {
                break;
            }
        }
    }
}

/**Portfolio category button*/
function portfolioCategory(categoryID, buttonID) {

    //highlighting button
    document.getElementsByClassName('portfolioSubLinkActive')[0].classList.remove('portfolioSubLinkActive');
    document.getElementById(buttonID).classList.add('portfolioSubLinkActive');

    var element = document.getElementsByClassName("portfolioCategories");
    for (var i = 0; i < element.length; i++) {
        if (element[i].id == categoryID)
            element[i].style.display = "block";
        else
            element[i].style.display = "none";
    }

    /**To allow element styling invoked by scrolling to show */
    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
}
/**Showing the document after everything is loaded */
document.getElementsByTagName("BODY")[0].style.visibility = "visible";




