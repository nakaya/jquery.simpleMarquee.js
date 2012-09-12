
jQuery plugin : Simple marquee.

これはなにか : 

テキストが右から左へ流れるだけのシンプルなMarqueeです。
ソースの軽量化のために余分な機能は一切いれてません。


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
   $('#marqueeOrg').marqueeOrg();

   // オプションで指定した要素が流れる
   $('#marqueeOrg2').marqueeOrg('.nagareru');
});
&lt;/script&gt;

&lt;style&gt;
.marqueeOrg{
    width:200px;
    border:solid 1px #000;
    position:relative;
    overflow:hidden;
    height:22px;
}
&lt;/style&gt;

&lt;div id=&quot;marqueeOrg&quot; class=&quot;marqueeOrg&quot;&gt;
    &lt;span&gt;流れるプール&lt;/span&gt;
&lt;/div&gt;

&lt;div id=&quot;marqueeOrg2&quot; class=&quot;marqueeOrg&quot;&gt;
    &lt;span class=&quot;nagareru&quot;&gt;流れるプール（オプション有り）&lt;/span&gt;
&lt;/div&gt;
</pre>


