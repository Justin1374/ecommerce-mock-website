//Create header
const header = document.createElement("header");
header.innerHTML = `
<div class="headerSection" id="brandingSection">
    <img>
    <p id="websiteTitle">Website Name</p>
</div>
    
<div class="headerSection" id="navSection">
    <button class="navBtn">Shop</button>
    <button class="navBtn">About</button>
    <button class="navBtn">Contact</button>
</div>

<div class="headerSection" id="userSection">
    <button id="accountOptions"></button>
    <button id="registerBtn">Sign-in</button>
    <button id="cartBtn"></button>
</div>
`
//Add header to document once its fully loaded
document.addEventListener('DOMContentLoaded', () => {
  document.body.prepend(header);
});