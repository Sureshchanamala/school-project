$(function() {

    $('.nav li').hover(function() {

        $(this).find('ul').stop().slideToggle(200);

    });

    $('.open-menu').click(function(e) {

        $('.nav').slideToggle();

        e.preventDefault();

    });

   $('td').each(function(index, item) {

    if($.trim($(item).text()) === "") {

        $(item).slideUp(); // $(item).remove();

    }

});
$('p').each(function() {
    var $this = $(this);
    if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
        $this.remove();
});

    var currurl = window.location.pathname;

    var index = currurl.lastIndexOf("/") + 1;

    var page = currurl.substr(index);

    $('.nav').find('li').each(function() {

        var href = $(this).find('a').attr('href');

        if (page == href) {

            $(this).addClass('active');

        }

    });

    $('.main-slider').bxSlider({

        pager: 0,

        auto: 1,

        speed: 1000,

        pause: 5000,

        controls: 0

    });

    $(document).ready(function () {

            $("#news1,#news2").newsticker();

        });

        

       // $.get('http://www.netmaestro.co.nz/rss.aspx', function(d){ 

       //   var t = d.find('channel');

       // });





    $('.parent').children('a').each(function() {

        $(this).on('click', function(e) {

            $(this).parent('.parent').toggleClass('active');

            e.preventDefault();

        });

    });

    $('.parent').mouseleave(function(event) {

        $(this).removeClass('active');

    });

    $('.tab-body').hide();

    $('.tab-body').first().show();

    $('.tab-head').first().addClass('active');



    $('.tab-head').on('click', function(e) {

        $(this).addClass('active').siblings().removeClass('active');;

        $('.tab-body').slideUp("fast");

        $(this).next('.tab-body').slideDown("fast");

        e.preventDefault();

    });

    //stop gallery image marquee

    

    //$('#js-news').ticker();

    $('.tab-body-2').hide();

    $('.tab-body-2').first().show();

    $('.tab-head-2').first().addClass('active');



    $('.tab-head-2').on('click', function(e) {

        $(this).addClass('active').siblings().removeClass('active');;

        $('.tab-body-2').slideUp("fast");

        $(this).next('.tab-body-2').slideDown("fast");

        e.preventDefault();

    });

  

    new WOW().init();

});
$('tr').filter(
    function(){
        return $(this).find('td').length == $(this).find('td:empty').length;
    }).hide();

$(window).load(function() {

    $('.news-slides').mCustomScrollbar({

        scrollButtons: {

            enable: true

        }

    });

});



        



/**

 * @author Matt Hinchliffe <http://www.maketea.co.uk>

 * @modified 13/05/2011

 * @title Simple jQuery News Ticker

 */

/*(function($)

{

    $.fn.Ticker = function(options)

    {

        var defaults = {



            // Time to display each news item. (integer, milliseconds)

            pause: 5000,



            // Time taken to fade in next news item. (integer, milliseconds)

            fadeIn: 800,



            // Time taken to fade out current news item. (integer, milliseconds)

            fadeOut: 800,



            // Pause between displaying each item when fading between items. (integer, milliseconds)

            delay: 500,



            // Next news item typed out one character at a time. If false item will fade in. (boolean)

            typewriter: true,



            // Time to type each character if using the typewriter effect (integer, milliseconds)

            speed: 35,



            // Character to use to mimic a computer cursor if using the typewriter effect (string|boolean)

            cursor: '_'

        };



        // Merge default options with user options

        var opts = $.extend({}, defaults, options);



        return $(this).each(function()

        {

            var list = $(this), typewriter = {}, interval;



            // Activate ticker and display first item

            list

                .addClass('ticker-active')

                .children(':first')

                .css('display', 'block');



            function changeItem()

            {

                var item = list.children(':first'),

                    next = item.next(),

                    copy = item.clone();



                clearTimeout(interval);



                // Append copy of current item to bottom of list

                $(copy)

                    .css('display', 'none')

                    .appendTo(list);



                // Fade current item out, remove from DOM then animate the next item

                item.fadeOut(opts.fadeOut, function()

                {

                    $(this).remove();



                    // Animate

                    if (opts.typewriter)

                    {

                        typewriter.string = next.text();



                        next

                            .text('')

                            .css('display', 'block');



                        typewriter.count = 0;

                        typewriter.timeout = setInterval(type, opts.speed);

                    }

                    else

                    {

                        next

                            .delay(opts.delay)

                            .fadeIn(opts.fadeIn, function ()

                            {

                                setTimeout(changeItem, opts.pause);

                            });

                    }

                });

            }



            function type()

            {

                typewriter.count++;



                var text =  typewriter.string.substring(0, typewriter.count);



                if (typewriter.count >= typewriter.string.length)

                {

                    clearInterval(typewriter.timeout);

                    setTimeout(changeItem, opts.pause);

                }

                else if (opts.cursor)

                {

                    text+= ' ' + opts.cursor;

                }



                list

                    .children(':first')

                    .text(text);

            }



            // Test there are more items to display then start ticker

            if (list.find('li').length > 1 )

            {

                interval = setTimeout(changeItem, opts.pause);

            }

        });

    };



    $('.ticker').Ticker();



})(jQuery);*/