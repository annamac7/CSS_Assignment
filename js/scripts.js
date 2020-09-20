
$( document ).ready(function() {
  console.log("ready");

});


$('.my-news-ticker').AcmeTicker({
  controls: {
//     prev: $('.acme-news-ticker-prev'),
    toggle: $('.acme-news-ticker-pause'),
//     next: $('.acme-news-ticker-next'),
},
  type: 'marquee',
  speed: .05
});

var mainConent = '<div class="tt"><div class="tool_percent">31%</div><div class="cont"><ul><li>27 FOLLOWERS</li><li>15 RETWEETS</li><li>4 FAVORITES</li></ul></div></div>';
var title = '<h5 style="color: dodgerblue; text-align: center">TWITTER</h5>'
new jBox('Tooltip', {
attach: '.tooltip',
title: title,
content: mainConent
});
