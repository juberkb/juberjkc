  loop: true
        var typed = new Typed(".typing-2", {

            strings: ["a Web-Developer", "a Web-Tester", "a Blogger", "a Freelancer"],
            typeSpeed: 60,
            backSpeed: 60,
            loop: true
        });
        // owl carousel script
        $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: false
                }
            }
        });
         