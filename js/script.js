    $(function(){
        $(".inview").on("inview", function (event, isInView) {
            if (isInView) {
            $(this).stop().addClass("is-show");
            }
        });
    });

    function slideAnime(){
        $('.leftAnime').each(function(){ 
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
                $(this).addClass("slideAnimeLeftRight"); 
                $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
            } 
        });
    }
    $(window).scroll(function (){
		slideAnime();
    });
    $(window).on('load', function(){
        slideAnime();
    });

    function fadeAnime(){
        $('.zoomInTrigger').each(function(){ 
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
                $(this).addClass('zoomIn');
            } 
        });
    }
	$(window).scroll(function (){
        fadeAnime();
    });
    $(window).on('load', function(){
        fadeAnime();
    });