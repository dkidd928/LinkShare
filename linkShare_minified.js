!function(){var a=window.location.hostname,o="",e="",c="";switch(a){case"www.aliexpress.com":e=window.location.pathname.split("/")[2],o="/item/",c="aliexpress.com";break;case"www.amazon.com":e=window.location.pathname.split("/")[3],o="/dp/",c="amazon.com";break;case"www.ebay.com":e=window.location.pathname.split("/")[3],o="/itm/",c="ebay.com";break;case"www.etsy.com":e=window.location.pathname.split("/")[2],o="/listing/",c="etsy.com";break;case"www.youtube.com":urlParams=new URLSearchParams(window.location.search),e=urlParams.get("v"),o="/",c="youtu.be";break;case"www.zappos.com":urlParams=new URLSearchParams(window.location.search),e=window.location.pathname.split("/").slice(4).join("/"),o="/product/",c="zappos.com";break;default:console.log("No short URL for ",a),c=location.href}var t=document.createElement("input");t.value=c+o+e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.parentNode.removeChild(t)}();
