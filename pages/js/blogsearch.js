const searchInput = document.getElementById("searchInput");
const blogCards = document.querySelectorAll(".blog-card");
const result = document.getElementById("searchResult");

// Search while typing
searchInput.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase();
    let visible = 0;

    blogCards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(keyword)) {
            card.style.display = "block";
            visible++;
        } else {
            card.style.display = "none";
        }

    });

    result.textContent = `${visible} blog(s) found`;

});


// Click a topic to search
document.querySelectorAll(".topic").forEach(topic => {

    topic.addEventListener("click", function (e) {

        e.preventDefault();

        searchInput.value = this.textContent;

        searchInput.dispatchEvent(new Event("keyup"));

    });

});
