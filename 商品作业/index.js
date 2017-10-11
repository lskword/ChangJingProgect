var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  loop: true,
  pagination: '.swiper-pagination',
  paginationClickable: true,
  mousewheelControl: true,
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimateCache(swiper); //隐藏动画元素
    swiperAnimate(swiper); //初始化完成开始动画
  },
  onSlideChangeEnd: function(swiper){
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  },


        slidesPerView: 1,

        spaceBetween: 30
});

var map = new AMap.Map('container',{
    resizeEnable: true,
    zoom: 10,
    center: [116.480983, 40.0958]
});
(function() {
  var index=0;
  $('#music')[0].onclick=function () {
    index=index===0?1:0;
    if (index===1) {
        $('audio')[0].pause();
    }else{
        $('audio')[0].play();
    }

  };

}());
