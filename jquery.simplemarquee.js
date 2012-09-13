/*
 * Simple Marquee jQuery Plug-in
 *
 * Copyright 2012 Seesaa, Inc. (http://www.seesaa.co.jp/) 
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
* http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Date: 2012-09-12
 * Rev:  1.0.00
 */

$.fn.simpleMmarquee = function ( opts ){
    var defaults = {
        mq       : $(':first', this)
        , easing : 'swing'
        , speed  : 3000
    },
    settings = $.extend(defaults, opts);

    var mq = defaults.mq;
    mqH    = mq.height();
    mqW    = mq.width();

    var easing = defaults.easing;
    var speed  = defaults.speed;

    var startPosition = $(this).width() + 10;
    endPosition = startPosition + mqW;

    mq.css({
        'left'          : startPosition
        , 'position'    : 'absolute'
        , 'white-space' : 'nowrap'
        , 'display'     : 'block'
    });

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

