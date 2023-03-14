const params = new URLSearchParams(window.location.search); // parse params
const queryTerm = params.get("q"); // get q param
const link = "magnet:?xt=urn:btih:" + queryTerm
document.getElementById("magnet").href = link; // assign value to magnet when loading

location.href = link; // set the URL of the current page
