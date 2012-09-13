
jQuery plugin : Simple marquee.

これはなにか : 

テキストが右から左へ流れるだけのシンプルなMarqueeです。


使い方 :

<pre>
&lt;script src=&quot;http://www.google.com/jsapi&quot;&gt;&lt;/script&gt;
&lt;script&gt;
google.load(&quot;jquery&quot;, &quot;1.7.1&quot;);
&lt;/script&gt;
&lt;script src=&quot;./jquery.simplemarquee.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
$(function(){
  // オプションが無い場合最初にくるDOM要素が流れる
   $('#marquee1').simpleMarquee();

   // オプション
   // marquee : $('.nagareru', this)
   // easing  : 'swing' || 'linear'
   // speed   : 'fast' || 'normal' || 'slow' or 3000
   $('#marquee2').simpleMarquee({
       marquee   : $('.nagareru', this)
       , easing  : 'linear'
       , speed   : 6000
   });
});
&lt;/script&gt;

&lt;style&gt;
.simplemarquee{
    width:200px;
    border:solid 1px #000;
    position:relative;
    overflow:hidden;
    height:22px;
}
&lt;/style&gt;

&lt;div id=&quot;marquee1&quot; class=&quot;simplemarquee&quot;&gt;
    &lt;span&gt;流れるプール&lt;/span&gt;
&lt;/div&gt;

&lt;div id=&quot;marquee2&quot; class=&quot;simplemarquee&quot;&gt;
    &lt;span class=&quot;nagareru&quot;&gt;流れるプール（オプション有り）&lt;/span&gt;
&lt;/div&gt;
</pre>


