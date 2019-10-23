$(document).ready(function () {
    // viet code trong nay
    var ranhToTop =  $('.ranh').offset().top;
    console.log('ranh to top', ranhToTop);
    
   $(window).scroll(function () { 
    //    cuon chuot toi dau , in toa do toi do
    var posToTop = $('html').scrollTop();

    if(posToTop >= ranhToTop ){
        $('.top-button').fadeIn();
    }else{
        $('.top-button').fadeOut();
    }
   });

   $('.top-button').click(function (e) { 
       e.preventDefault();
       $('html').animate({scrollTop : 0},2000)
   });

   
});