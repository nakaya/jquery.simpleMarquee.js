
jQuery plugin : Simple marquee.

これはなにか : 

テキストが右から左へ流れるだけのシンプルなMarqueeです。
ソースの軽量化のために余分な機能は一切いれてません。


使い方 :

<script src="http://www.google.com/jsapi"></script>
<script>
google.load("jquery", "1.7.1");
</script>
<script src="./jquery.simplemarquee.js"></script>
<script>
$(function(){
   // オプションが無い場合最初にくるDOM要素が流れる
   $('#marqueeOrg').marqueeOrg();

   // オプションで指定した要素が流れる
   $('#marqueeOrg2').marqueeOrg('.nagareru');
});
</script>

<style>
.marqueeOrg{
    width:200px;
    border:solid 1px #000;
    position:relative;
    overflow:hidden;
    height:22px;
}
</style>

<div id="marqueeOrg" class="marqueeOrg">
    <span>流れるプール</span>
</div>

<div id="marqueeOrg2" class="marqueeOrg">
    <span class="nagareru">流れるプール（オプション有り）</span>
</div>


