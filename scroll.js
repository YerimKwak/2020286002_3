document.addEventListener('DOMContentLoaded',setVal);

var targetScrollPos;
var scrollPos = 0;
var nowScrollpos = pageYOffset;
var scrollInterval;

function setVal()
{

    console.log("loaded!");
    var menu= document.querySelectorAll('#menus ul li');
    var contents= document.querySelectorAll('#contents > section') 

    for(var i =0;i < menu.length; i++)
    {
        menu[i].addEventListener('click', menuClick);
      
        function menuClick()
        {
            //clearInterval(scrollInterval);
            var index = this.getAttribute('clickVal');
            targetScrollPos = contents[index].offsetTop;
           
            //console.log(targetScrollPos);

            //window.scroll(0,targetScrollPos);

            scrollInterval = requestAnimationFrame(moveTo);
        }
    }

}
window.addEventListener('scroll',scrollFn);

function scrollFn()
{
    nowScrollpos = pageYOffset;
    scrollPos = nowScrollpos;
}

function moveTo()
{
    scrollPos += (targetScrollPos- nowScrollpos) * 0.07;
    window.scroll(0,scrollPos);

    if(Math.abs(targetScrollPos - scrollPos) <= 1)
    {
        cancelAnimationFrame(scrollInterval);
        window.scroll(0,targetScrollPos);
        nowScrollpos = targetScrollPos;
        //clearInterval(scrollInterval);

    }else
    {
        requestAnimationFrame(moveTo);
    }

    
}

$(document).ready(function($) {

    $(".scroll_move").click(function(event){         

            event.preventDefault();

            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

    });

});