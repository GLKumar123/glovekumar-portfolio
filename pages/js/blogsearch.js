// =======================================
// Live Blog Search
// =======================================
document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");

    const blogCards = document.querySelectorAll(".blog-card");

    if (!searchInput) return;

    searchInput.addEventListener("keyup", () => {

        const keyword = searchInput.value.toLowerCase().trim();

        let visibleCount = 0;

        blogCards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(keyword)) {

                card.style.display = "block";

                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });

        const result = document.getElementById("searchResult");

        if(result){

            result.innerHTML = visibleCount + " article(s) found";

        }

    });

});
