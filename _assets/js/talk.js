/**
 * talk.js
 * Scripts for interaction on the /talk/* pages
 */
(function (ready) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    ready();
  } else {
    document.addEventListener("DOMContentLoaded", ready);
  }
})(function () { /* the document is now ready. */

  /**
   * youTubeVideoLoader
   *
   */
  (function youTubeVideoLoader() {
    var loaders = [].slice.call(document.querySelectorAll(".js-youtube-loader"), 0);
    loaders.forEach(function(loader) {
      loader.addEventListener("click", function(evt) {
        var target = evt.currentTarget;
        var videoEl = document.createElement("iframe");
        videoEl.setAttribute("src", "https://www.youtube-nocookie.com/embed/wqFUPXnqdIo?autoplay=1&modestbranding=1");
        videoEl.setAttribute("class", "video");
        videoEl.setAttribute("frameborder", "0");
        videoEl.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
        videoEl.setAttribute("allowfullscreen", "1");
        target.parentElement.appendChild(videoEl);
      });
    });
    // find element anchors,targets
    // attach click handlers
      // hide anchor, show loader
      // have clicks replace anchor-wrap with video
      // hide loader
    //fade in anchors
  })();



});



