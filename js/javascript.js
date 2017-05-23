(function() {
  'use strict';

  var m;
  var h;
  var c;
  var counter;
  var hHeight;

  function setTopPadding() {
    hHeight = h.offsetHeight;
    m.style.paddingTop = hHeight + "px";
  }

  function onScroll() {
    //window.addEventListener("scroll", _.throttle(callbackFunc, 200));
    /**
     * Replace the line above with the following one 
     * to see how many more times the "callbackFunc" is executed
     */
    window.addEventListener("scroll", _.throttle(callbackFunc, 200));

    function callbackFunc() {
      c.style.visibility = "hidden";
      c.innerHTML = counter++;
      // Check for height scroll
      setHeaderSize(window.pageYOffset);
    }
  }

  function setHeaderSize(y) {
    if (y > 100) { // scrolled
      h.classList.add("scroll");
      document.getElementById("logoTitleAC").innerHTML = "ANNE-CAROLYNE B.";
      document.getElementById("logoTitleB").innerHTML = "";
    } else {
      h.classList.remove("scroll");
      // check for width
      if ($(window).width() < 1060) {
        document.getElementById("logoTitleAC").innerHTML = "ANNE-CAROLYNE B.";
        document.getElementById("logoTitleB").innerHTML = "";
      } else {
        document.getElementById("logoTitleAC").innerHTML = "ANNE-CAROLYNE";
        document.getElementById("logoTitleB").innerHTML = "BINETTE";
      }
    }
  }

  window.onload = function() {
    m = document.querySelector("main");
    h = document.querySelector("header");
    c = document.querySelector(".counter");
    counter = 0;

    setTopPadding();
    onScroll();
  };

  window.onresize = function() {
    setTopPadding();
    setHeaderSize(window.pageYOffset);
  };
})();