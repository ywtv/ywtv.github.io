const params = new URLSearchParams(window.location.search); //parse params
const q = params.get("q"); //get q param
document.getElementById("intense").value = q; //assign q value to input when loading