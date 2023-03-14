const params = new URLSearchParams(window.location.search); //parse params
const q = params.get("q"); //get q param
document.getElementById("magnet").href = "magnet:?xt=urn:btih:" + q; //assign q value to input when loading
