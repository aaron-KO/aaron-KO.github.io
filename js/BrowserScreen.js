
var stxt = "";
stxt += "<p>Total width/height: " + screen.width + "*" + screen.height + "</p>";
stxt += "<p>Available width/height: " + screen.availWidth + "*" + screen.availHeight + "</p>";
stxt += "<p>Color depth: " + screen.colorDepth + "</p>";
stxt += "<p>Color resolution: " + screen.pixelDepth + "</p>";


document.getElementById("browserData").innerHTML = stxt;
