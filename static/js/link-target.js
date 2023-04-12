(function() {
  // find all <a> tags in the page
  // const links = document.getElementsByTagName("a");
  const links = document.querySelectorAll(".content a");
  // loop through all the <a> tags
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    // check if the link is external
    if (link.hostname !== window.location.hostname) {
      // set the target property to "_blank" to open the link in a new tab
      link.setAttribute("target", "_blank");
      // add the rel="noopener" attribute to improve security on Chrome
      link.setAttribute("rel", "noopener");
    }
  }
})();
