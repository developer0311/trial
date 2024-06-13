let account = document.querySelector("#account");
let downArrow = document.querySelector("#downArrow");
let profileDropdown = document.querySelector("#profileDropdown");


account.addEventListener("mouseover", (event)=>{
    downArrow.style.transform= "rotate(180deg)";
    profileDropdown.style.display = "block"
    account.style.backgroundColor = "#f0f5ff";
    // account.style.boxShadow = "0px 0px 5px 1px black";
    account.style.border = "0.1px solid #beceed";
});

account.addEventListener("mouseout", (event)=>{
    downArrow.style.transform= "rotate(0deg)";
    profileDropdown.style.display = "none"
    account.style.backgroundColor = "transparent";
    // account.style.boxShadow = "0px 0px 0px 0px";
    account.style.border = "0.1px solid transparent";
});

profileDropdown.addEventListener("mouseover", (event)=>{
    downArrow.style.transform= "rotate(180deg)";
    profileDropdown.style.display = "block"
    account.style.backgroundColor = "#f0f5ff";
    // account.style.boxShadow = "0px 0px 5px 1px black";
    account.style.border = "0.1px solid #beceed";
    
});

profileDropdown.addEventListener("mouseout", (event)=>{
    downArrow.style.transform= "rotate(0deg)";
    profileDropdown.style.display = "none"
    account.style.backgroundColor = "transparent";
    account.style.border = "0.1px solid transparent";
    // account.style.boxShadow = "0px 0px 0px 0px";
});