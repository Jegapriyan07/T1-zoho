(function ($) {
  "use strict";

  var DESIGN_WIDTH = 1720;

  function fitDesignToViewport() {
    var scale = Math.min(1, window.innerWidth / DESIGN_WIDTH);
    document.documentElement.style.zoom = String(scale);
  }

  var components = [
    { id: "hero", path: "src/components/hero.html" },
    { id: "stats-marquee", path: "src/components/stats-marquee.html" },
    { id: "philosophy", path: "src/components/philosophy.html" },
    { id: "feature-tabs", path: "src/components/feature-tabs.html" },
    { id: "warehouse-features", path: "src/components/warehouse-features.html" },
    { id: "security", path: "src/components/security.html" },
    { id: "testimonials", path: "src/components/testimonials.html" },
    { id: "bottom-cta", path: "src/components/bottom-cta.html" }
  ];

  function initLogoMarquee() {
    var $track = $(".stats-marquee__track");
    var $set = $track.find(".stats-marquee__set").first();

    if (!$set.length) {
      return;
    }

    $track.append($set.clone());
    var setWidth = $set.outerWidth(true);

    if (!setWidth) {
      return;
    }

    var offset = 0;
    var speed = 0.6;

    function tick() {
      offset -= speed;
      if (Math.abs(offset) >= setWidth) {
        offset = 0;
      }
      $track.css("transform", "translateX(" + offset + "px)");
      window.requestAnimationFrame(tick);
    }

    window.requestAnimationFrame(tick);
  }

  function initSecurityScrollHint() {
    var $scroll = $(".security__cards-scroll");
    if (!$scroll.length) {
      return;
    }

    $scroll.on("wheel", function (event) {
      if (Math.abs(event.originalEvent.deltaY) > Math.abs(event.originalEvent.deltaX)) {
        event.preventDefault();
        this.scrollLeft += event.originalEvent.deltaY;
      }
    });
  }

  function loadComponents() {
    var $page = $("#platform-page");
    var chain = $.Deferred().resolve();

    components.forEach(function (component) {
      chain = chain.then(function () {
        return $.get(component.path).then(function (html) {
          $page.append(html);
        });
      });
    });

    chain.done(function () {
      initLogoMarquee();
      initSecurityScrollHint();
      fitDesignToViewport();
    });
  }

  $(window).on("resize", fitDesignToViewport);
  $(fitDesignToViewport);
  $(loadComponents);
})(jQuery);
