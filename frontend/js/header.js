//Create header
const header = document.createElement("header");
header.innerHTML = `
<div class="headerSection" id="brandingSection">
    <img>
    <p id="websiteTitle"><a href="../html/index.html">Website Name</a></p>
</div>
    
<div class="headerSection" id="navSection">
    <button class="navBtn" onclick="window.location.href='../html/catalog.html'">Shop</button>
    <button class="navBtn">About</button>
    <button class="navBtn">Contact</button>
</div>

<div class="headerSection" id="userSection">
    <button id="accountOptions"><img src="../resources/images/accountIcon.png"></button>
    <button id="registerBtn" onclick="window.location.href='../html/registration.html'">Sign-in</button>
    <button id="cartBtn"><img src="../resources/images/cartIcon.png"></button>
</div>
`


//Add header to document once its fully loaded
document.addEventListener('DOMContentLoaded', () => {
  document.body.prepend(header);
});