var btxt = "";
btxt += "<p>href: " + location.href + "</p>";
btxt += "<p>hostname: " + location.hostname + "</p>";
btxt += "<p>path Name: " + location.pathname + "</p>";
btxt += "<p>protocol: " + location.protocol + "</p>";

document.getElementById("browserData").innerHTML = btxt;
