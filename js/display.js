//Main menu elements
const bgImage = document.getElementById("bg-image");
const title = document.getElementById("title");
const contact = document.getElementById("contact");
const portrait = document.getElementById("portrait");

//Dropdown sections in the body
const dropdowns = document.querySelectorAll(".dropdown-title");

//When you click a dropdown bar, show the contents within
dropdowns.forEach(dropdown => {
    //Has so so when you click a dropdown bar, the content either shows up or
    dropdown.addEventListener("click", () => {
        toggleContent(dropdown);
    });
});

window.onload = function() {
    //Turns off smooth scrolling
    document.documentElement.style.scrollBehavior = "auto";
    //Sets the page back to the top
    //location.href = "#start-page-container";

    //Blurs the background image when the page is loaded
    bgImage.classList.add("blur");

    //Has each main screen element slide on screen
    title.style.transform = "translateX(0)";
    contact.style.transform = "translateX(0)";
    portrait.style.transform = "translateX(0)";

    //Turns on smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
};

function toggleContent (element) {
    //Gets the title's sibling (the content div)
    let content = element.nextElementSibling;

    //Toggles the content between showing and not showing
    if (content.style.display == "block") {
        content.style.display = "none";
    }
    else {
        content.style.display = "block";
    }
}