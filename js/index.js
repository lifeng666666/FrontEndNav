$(function () {
    // 点击导航事件
    $("#category li").on("click", function () {
        $("#category li").each(function () {
            $(this).removeClass("active");
        })
        $(this).addClass("active");
        // 获取当前楼层名
        var floorId = $(this).attr("id");
        var floorName = floorId + "Item";
        // 获取楼层高度
        var floorTop = $("#" + floorName).offset().top;
        // console.log(floorTop);
        $('html,body').animate({
            scrollTop: floorTop
        }, 800);

    });


    $(window).scroll(function () {
        $("#category li").each(function () {
            $(this).removeClass("active");
        })
    });

    // $(window).scroll(function () {
    //     // alert('msg');
    //     // 获取屏幕滚动的高度
    //     var top = $('html,body').scrollTop() || $(window).scrollTop();
    //     console.log(top);
    //     $("#mainContent > div").each(function () {
    //         // 获取当前盒子在浏览器的高度
    //         var floorHight = $(this).offset().top;
    //         // 获取当前楼层id
    //         var floorName = $(this).attr("id");
    //         var floorId = floorName.substring(0,floorName.length-4);


    //         if (top >= floorHight) {
    //             $("#category li").each(function () {
    //                 $(this).removeClass("active");
    //             })
    //             $("#"+floorId).addClass("active");

    //         }
    //     });

    // });



});