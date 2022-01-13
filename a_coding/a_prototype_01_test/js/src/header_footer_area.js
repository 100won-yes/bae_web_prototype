// header_footer_area.js

// * header, footer 영역 불러오기

{
  const headerData = "../temp/header.html";
  const footerData = "../temp/footer.html";

  const elBody = document.querySelector("body");
  const elHeadBox = document.querySelector(".headBox_inner");
  const elFootBox = document.querySelector("#footBox");
  
  function fnScript() {
    const mkScript = document.createElement("script");
    mkScript.setAttribute("src", "../js/src/header_nav.js");
    elBody.append(mkScript);
  };

  fetch(headerData)
  .then(response => response.text())
  .then((element) => {
    elHeadBox.innerHTML = element;
  })
  .then(() => {
    fnScript();
  })
  
  fetch(footerData)
  .then(response => response.text())
  .then((element) => {
    elFootBox.innerHTML = element;
  })
  
}