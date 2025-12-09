/* 전체 풀페이지 */
$('#fullpage').fullpage({
    responsiveWidth: 1024,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition: 'left',
    showActiveTooltip: true,
    onLeave: function (origin, destination, direction, trigger) {
        if (destination === 2 || destination === 4) {
            $("#header,#fp-nav").addClass("active");
        } else {
            $("#header,#fp-nav").removeClass("active");
        };
        if (destination === 6) {
            $("#fp-nav, #header").fadeOut();
        } else {
            $("#fp-nav, #header").fadeIn();
        };
    },
});


