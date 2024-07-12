$(function(){

    var n = 0; //현재 보여지는 section page의 index번호 0을 의미 (0~4)
    var moving = false;

    $("html, body").on("mousewheel DOMMouseScroll", function(event){
        // console.log(event)

        var delta = event.originalEvent.wheelDelta; //mousewheel = 크롬 엣지 오페라
        console.log(delta) //-120(scroll down-음수)  120(scroll up-양수)

        var detail = event.originalEvent.detail; //DOMMouseScroll = 파이어폭스
        console.log(detail)  // 3(scroll down-양수) -3(scroll up-음수)

        if(moving == false){
            moving=true;

                var h = $(window).innerHeight();
                console.log("h : " ,h);
                
                var con_top = $(".container").offset().top;
                console.log("con_top : " ,con_top);


            if(delta<0 || detail>0){ //마우스 휠 내릴때
                
                if(n<4){
                    n++;
                    con_top -= h;
                }//if(n<4)
                // console.log("con_top 1 : ",con_top)
                
            }else if(delta>0 || detail<0){ //마우스 휠 올릴때
                
                if(n>0){
                    n--;
                    con_top += h;
                } //if(n>0)
                // console.log("con_top 2 : ",con_top)
                
            }//if up down
            
            console.log("n : ", n)
            console.log("con_top 1 : ",con_top)



        } //if false

        $(".container").animate({top : con_top}, 1000, function(){
            moving = false;
            
            $(".btn_group li").removeClass("on")
            $(".btn_group li").eq(n).addClass("on")

            if(n!=0){
                $(".f_nav").addClass("on")
                $(".nav").addClass("on")
            }else{
                $(".f_nav").removeClass("on")
                $(".nav").removeClass("on")

            }


        })
        
    }) //mousewheel DOMMouseScroll
    
    $(".nav a, .f_nav a, .btn_group a").click(function(){
        n = $(this).parent().index();

            if(n!=0){
                $(".f_nav").addClass("on")
                $(".nav").addClass("on")
            }else{
                $(".f_nav").removeClass("on")
                $(".nav").removeClass("on")

            }
        
        $(".btn_group li").removeClass("on")
        $(".btn_group li").eq(n).addClass("on")

        var con_top = -n * $(window).innerHeight();
        $(".container").animate({top : con_top}, 1000)
    })  //click

    $(window).resize(function(){
        resize();
    })


    function resize(){
        var con_top = -n * $(window).innerHeight();
        $(".container").css({top : con_top})
        $(".container .page").css({width : window.innerWidth , height : window.innerHeight})
    }

}) //j