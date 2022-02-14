const infoPar = document.querySelector(".info-parent");
const name = document.getElementById("inputText");
const usn = document.getElementById("inputUsn");
const address = document.getElementById("inputAddr");
const phone = document.getElementById("inputPhone");
const gender = document.getElementsByName("gender");
apendInfo = () => {
  var gen;
  gender[0].checked == true ? (gen = "Male") : (gen = "Female");
  if (
    name.value.trim() == "" ||
    usn.value.trim() == "" ||
    address.value.trim() == "" ||
    phone.value.trim() == ""
  ) {
    alert("Empty");
  } else {
    const infoDiv = document.createElement("div");
    infoDiv.className = "info";
    const namep = document.createElement("p");
    namep.append(document.createTextNode(name.value));
    const usnp = document.createElement("p");
    usnp.append(document.createTextNode(usn.value));
    const nump = document.createElement("p");
    nump.append(document.createTextNode(phone.value));
    const genp = document.createElement("p");
    genp.append(document.createTextNode(gen));
    const addrp = document.createElement("p");
    addrp.append(document.createTextNode(address.value));
    infoDiv.appendChild(namep);
    infoDiv.appendChild(usnp);
    infoDiv.appendChild(nump);
    infoDiv.appendChild(addrp);
    infoDiv.appendChild(genp);
    infoPar.append(infoDiv);
    console.log(document.querySelectorAll(".info"));
  }
};
// apendInfo();
reset = () => {
  name.value = "";
  usn.value = "";
  phone.value = "";
  address.value = "";
};
