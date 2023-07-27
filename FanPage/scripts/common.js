function Common() {
    let self = this;

    /* Properties */
    this.promoBar = {
        promoItems: null,
        currentItems: 0,
        numberOfItems: 0,
    };

    /* Methods */
    this.initialisePromo = function () {
        /* Get all items in promo bar */
        let promoItems = $("#promo > div");

        /* Set values */
        this.promoBar.promoItems = promoItems;
        this.promoBar.numberOfItems = promoItems.length;

        /* Initiate promo loop to show next item */
        this.startDelay();
    };

    this.startDelay = function () {
        /* Wait 4 seconds then show the next message */
        setTimeout(function () {
            self.showNextPromoItem();
        }, 4000);
    };

    this.showNextPromoItem = function () {
        /* Fade out current item */
        $(self.promoBar.promoItems).fadeOut("slow").promise().then(function () {
            /* Increment current promo item counter */
            if (self.promoBar.currentItems >= (self.promoBar.numberOfItems - 1)) {
                /* Reset counter to zero */
                self.promoBar.currentItems = 0;
            } else {
                /* Increase counter by 1 */
                self.promoBar.currentItems++;
            }

            /* Fade in the next item */
            $(self.promoBar.promoItems).eq(self.promoBar.currentItems).fadeIn("slow", function () {
                /* Delay before showing next item */
                self.startDelay();
            });
        });
    };
}

$(document).ready(function () {
    /* Instantiate new Common class */
    app.common = new Common();

    /* Initialize the Promo bar */
    app.common.initialisePromo();
});
