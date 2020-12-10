(function(){var hostname = window.location.hostname;
  var pathname = "";
  var identifier = "";
  var shorthost = "";

  switch(hostname) {
    case "www.aliexpress.com":
      identifier = window.location.pathname.split("/")[2];
      pathname = "/item/";
      shorthost = "aliexpress.com"
      break;
    case "www.amazon.com":
      identifier = window.location.pathname.split("/")[3];
      pathname = "/dp/";
      shorthost = "amazon.com"
      break;
    case "www.ebay.com":
      identifier = window.location.pathname.split("/")[3];
      pathname = "/itm/";
      shorthost = "ebay.com"
      break;
    case "www.etsy.com":
      identifier = window.location.pathname.split("/")[2];
      pathname = "/listing/";
      shorthost = "etsy.com"
      break;
    case "www.youtube.com":
      urlParams = new URLSearchParams(window.location.search);
      identifier = urlParams.get('v');
      pathname = "/"
      shorthost = "youtu.be";
      break;
    default:
      console.log("No short URL for ", hostname);
      shorthost = location.href;
      break;
  }

  var input = document.createElement("input");
  input.value = shorthost + pathname + identifier;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  input.parentNode.removeChild(input);
})();
