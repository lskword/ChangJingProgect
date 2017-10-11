  var oApproach = document.querySelector('#approach');
  setTimeout(function() {
    oApproach.style.display = 'none';
  }, 1000);
  window.onload=function () {
    // console.log($('#boxs .top img'))
    setTimeout(function () {
      $('#boxs .top img')[0].style.animation='bounceOut'+' '+'1s'+' '+ 'ease'+' '+'2s'+' '+'infinite';
    },3000);
  };
