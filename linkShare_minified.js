!function(){var a="",e="",o="";switch(window.location.hostname){case"www.amazon.com":e=window.location.pathname.split("/")[3],a="/dp/",o="amazon.com";break;case"www.ebay.com":e=window.location.pathname.split("/")[3],a="/itm/",o="ebay.com";break;case"www.youtube.com":urlParams=new URLSearchParams(window.location.search),e=urlParams.get("v"),a="/",o="youtu.be"}var n=document.createElement("input");n.value=o+a+e,document.body.appendChild(n),n.select(),document.execCommand("copy"),n.parentNode.removeChild(n)}();
