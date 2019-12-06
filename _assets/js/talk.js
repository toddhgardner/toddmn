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
    function loadYouTubeVideo(evt) {
      var container = evt.currentTarget.parentElement;
      if (container.classList.contains("loaded")) {
        return;
      }
      container.classList.add("loaded");
      var videoId = container.getAttribute("data-video-id");
      var videoEl = document.createElement("iframe");
      videoEl.setAttribute("src", "https://www.youtube-nocookie.com/embed/" + videoId + "?autoplay=1&modestbranding=1");
      videoEl.setAttribute("class", "video");
      videoEl.setAttribute("frameborder", "0");
      videoEl.setAttribute("allow", "autoplay;");
      videoEl.setAttribute("allowfullscreen", "1");
      container.appendChild(videoEl);
    }

    var loaders = document.querySelectorAll(".js-youtube-loader");
    for (var loaderIdx = 0; loaderIdx < loaders.length; loaderIdx++) {
      var loader = loaders[loaderIdx];
      var button = document.createElement("button");
      button.setAttribute("type", "button");
      button.setAttribute("class", "video-load-button");
      button.setAttribute("title", "Play");
      button.addEventListener("click", loadYouTubeVideo);
      loader.appendChild(button);
    }
  })();



});



