const params = new URLSearchParams(window.location.q); //parse params
const q = params.get("q"); //get q param
document.getElementbyid("intense").value = q; //assign q value to input when loading
