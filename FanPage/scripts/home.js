function HomeIndex() {
    /* Methods */
    this.initialiseScrollToTopButton = function () {
        /* Window Scroll Event Handler */
        $(window).scroll(function () {
            /* Show or Hide Scroll to Top Button based on scroll distance */
            var verticalHeight = $(this).scrollTop();
            if (verticalHeight > heightFromTop) {
                $("#scrollInizioPag").fadeIn();
            } else {
                $("#scrollInizioPag").fadeOut();
            }
        });
    }
}
        $(document).ready(function () {
            /* Instatiate new Home class */
            app.HomeIndex = new HomeIndex();
            /* Initialise the Scroll To Top Button */
            app.HomeIndex.initialiseScrollToTopButton();
            /* Properties */
        const heightFromTop = 300;
        });
        /* Scroll to Top Click Event Handler */
        $("#scrollInizioPag").click(function () {
            $("html, body").animate({ scrollTop: 0 },"slow");
        });
