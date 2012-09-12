
jQuery plugin : Simple marquee.

これはなにか : 

テキストが右から左へ流れるだけのシンプルなMarqueeです。
ソースの軽量化のために余分な機能は一切いれてません。


使い方 :

&lt;script src=&quot;http://www.google.com/jsapi&quot;&gt;&lt;/script&gt;<br>
&lt;script&gt;<br>
google.load(&quot;jquery&quot;, &quot;1.7.1&quot;);<br>
&lt;/script&gt;<br>
&lt;script src=&quot;./jquery.simplemarquee.js&quot;&gt;&lt;/script&gt;<br>
&lt;script&gt;<br>
$(function(){<br>
   // オプションが無い場合最初にくるDOM要素が流れる<br>
   $('#marqueeOrg').marqueeOrg();<br>
<br>
   // オプションで指定した要素が流れる<br>
   $('#marqueeOrg2').marqueeOrg('.nagareru');<br>
});<br>
&lt;/script&gt;<br>
<br>
&lt;style&gt;<br>
.marqueeOrg{<br>
    width:200px;<br>
    border:solid 1px #000;<br>
    position:relative;<br>
    overflow:hidden;<br>
    height:22px;<br>
}<br>
&lt;/style&gt;<br>
<br>
&lt;div id=&quot;marqueeOrg&quot; class=&quot;marqueeOrg&quot;&gt;<br>
    &lt;span&gt;流れるプール&lt;/span&gt;<br>
&lt;/div&gt;<br>
<br>
&lt;div id=&quot;marqueeOrg2&quot; class=&quot;marqueeOrg&quot;&gt;<br>
    &lt;span class=&quot;nagareru&quot;&gt;流れるプール（オプション有り）&lt;/span&gt;<br>
&lt;/div&gt;



