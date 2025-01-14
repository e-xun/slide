$(function () {
    let total = $(".panel li").length;
    // console.log(total);
    let i = 0;
    start();

    // ========정리=========//

    function move() {
        i++;
        if (i == total - 1) {
            $(".panel")
                .stop()
                .animate({ "margin-left": "-2000px" }, function () {
                    $(".panel").css({ "margin-left": 0 });
                });
            i = 0;
        } else {
            $(".panel")
                .stop()
                .animate({ "margin-left": -i * 500 });
        }
    }

    function backmove() {
        i--;
        if (i < 0) {
            $(".panel").css({ "margin-left": -2000 });
            $(".panel").stop().animate({ "margin-left": -1500 });
            i = 3;
        } else {
            $(".panel")
                .stop()
                .animate({ "margin-left": -i * 500 });
        }
    }

    function style() {
        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");
    }

    //================================================================//

    // 슬라이드 //
    function start() {
        timer = setInterval(function () {
            move();
            style();
        }, 2000);
    }

    //다음클릭//
    $(".next").on("click", function () {
        clearInterval(timer); //클릭 잠시 멈춤//
        move();
        style();
        start();
    });

    //이전클릭//
    $(".prev").on("click", function () {
        clearInterval(timer);
        backmove();
        style();
        start();
    });

    //하단클릭//
    $(".navi li").on("click", function () {
        clearInterval(timer);
        i = $(this).index();
        $(".panel")
            .stop()
            .animate({ "margin-left": -i * 500 });
        style();
        start();
    });
});
