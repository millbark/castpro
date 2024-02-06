$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
          $('header h1 img').attr('src','images/header/logo.png');
          $('header').addClass('on');
        }else{
            $('header h1 img').attr('src','images/header/white-logo.png');
          $('header').removeClass('on');
        }
      }); 

      $(".search").click(function (e) {
        e.preventDefault();
        let current = $(this).attr('data-id');
        $('#' + current).addClass('on');
        $("body").addClass("on");
    });
    $(".popup button").on("click", function () {
      $(this).closest(".popup").removeClass("on");
      $("body").removeClass("on");
  });


    $('.hello-station-tab-menu li').click(function(e){
        e.preventDefault();
        $('.hello-station-tab-menu li').removeClass('on');
        $(this).addClass('on');
        let current = $(this).attr('data-name');
        $('.swiper-wrap').removeClass('on');
        $('#' + current).addClass('on');
    });

      $('.hello-station-tab-menu').click(function(e){
        e.preventDefault();
        $('.hello-station-tab-menu').removeClass('on');
        $(this).addClass('on');
        let current=$(this).attr('data-name');
        $('.swiper-wrap').removeClass('on');
        $('#' + current).addClass('on');
      });

      $("#inquiry .leaflet").click(function (e) {
        e.preventDefault();
        $('.popup-install-form').addClass('on'); 
        $("body").addClass("on");
    });
    $(".popup-install-form button").on("click", function () {
      $(this).closest(".popup-install-form").removeClass("on");
      $("body").removeClass("on");
  });

  $("#quick-menu li").mouseenter(function (e) {
    e.preventDefault();
    $('#quick-menu li').removeClass('on');
    $(this).addClass('on');
});
$("#quick-menu li").mouseleave(function (e) {
  e.preventDefault();
  $('#quick-menu li').removeClass('on');
});
})//ready
