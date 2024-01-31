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
        $('#' + current).addClass('on'); // Add the 'on' class to the specific popup
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
})//ready
