var btxt = "";
btxt += "<p>Browser Product: " + navigator.product + "</p>";
btxt += "<p>Browser Name: " + navigator.appName + "</p>";
btxt += "<p>Browser Version: " + navigator.appVersion + "</p>";
btxt += "<p>Browser Language: " + navigator.language + "</p>";
btxt += "<p>Platform: " + navigator.platform + "</p>";
btxt += "<p>User-agent header: " + navigator.userAgent + "</p>";
document.getElementById("browserData").innerHTML = btxt;
