

new WOW().init();

$(window).on("load",function () {
    $('.loader-container').fadeOut(500,function () {
        $(this).remove();
    });
});
// $(window).on("load",function(){
//     $(".loader-container").fadeOut(500,function(){
//         $(this).remove();
//     })
// })
  