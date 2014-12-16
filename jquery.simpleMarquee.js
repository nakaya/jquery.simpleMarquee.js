/*
 * Simple Marquee jQuery Plug-in
 *
 * Copyright 2014 Seesaa, Inc. (http://www.seesaa.co.jp/) 
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 */

$.fn.simpleMarquee = function ( opts ){
    var defaults = {
        marquee  : $(':first', this)
        , easing : 'swing'
        , speed  : 3000
    },
    settings = $.extend(defaults, opts);
    var startPosition = $(this).width() + 10;

    var mq = defaults.marquee;
    mq.css({
        'left'          : startPosition
        , 'position'    : 'absolute'
        , 'white-space' : 'nowrap'
        , 'display'     : 'block'
    });
    mqH    = mq.height();
    mqW    = mq.width();
    var endPosition = mqW + 10;

    var easing = defaults.easing;
    var speed  = defaults.speed;

    var animate = function(){
        mq.animate({
            left : '-' + endPosition + 'px'
        }, speed , easing , function(){
            mq.css({'left': startPosition });
            animate();
        });
    };
    animate();
};

