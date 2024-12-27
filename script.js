// Script for future interactivity
document.querySelector(".search-bar button").addEventListener("click", function () {
    const searchTerm = document.querySelector(".search-bar input").value;
    if (searchTerm.trim() === "") {
        alert("Please enter a search term.");
    } else {
        alert(`Searching for: ${searchTerm}`);
    }
});
