$(document).ready(function() {
    $("#topBarSelection > ul > li").on("click", "a", function(event){
        $(this).parent().find(".dropdown").slideToggle();
        event.preventDefault();
        event.stopPropagation();
    })
    $(".dropdown").on("click", function (event) {
        event.stopPropagation();
    });
    $(".dropNavParent").hover(function() {
        $(this).closest("li").find(".dropNav").stop().fadeToggle(200);
    });
    $("#mobileMenu").on("click", function(){
        $("#test").slideToggle(500);
        console.log($(window).width());
        $(this).toggleClass("clicked");
    });
    $(window).resize(function(){
        if(($(window).width()) > 425){
            $("#test").css("display", "flex");
        } else {
            $("#test").css("display", "none");
        };
    })
    $(window).scroll(function(){
        if($(window).scrollTop()>200){
            $("#backToTop").show(500);
        } else {
            $("#backToTop").hide(500);
        }
        if($(window).scrollTop()){
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });
})
$(document).on("click", function () {
    $(".dropdown").hide();
});