// =======================================
// Portfolio Animations
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    //------------------------------------------------
    // Scroll Reveal
    //------------------------------------------------

    const cards = document.querySelectorAll(".blog-card");

    function revealCards(){

        cards.forEach(card => {

            const top = card.getBoundingClientRect().top;

            if(top < window.innerHeight - 100){

                card.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll", revealCards);

    revealCards();


    //------------------------------------------------
    // Sticky Navigation
    //------------------------------------------------

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){

            header.classList.add("sticky");

        }else{

            header.classList.remove("sticky");

        }

    });


    //------------------------------------------------
    // Active Navigation
    //------------------------------------------------

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item => {

                item.classList.remove("active");

            });

            link.classList.add("active");

        });

    });


    //------------------------------------------------
    // Back To Top Button
    //------------------------------------------------

    const topBtn = document.getElementById("topBtn");

    if(topBtn){

        window.addEventListener("scroll", () => {

            if(window.scrollY > 300){

                topBtn.style.display = "flex";

            }else{

                topBtn.style.display = "none";

            }

        });

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }


    //------------------------------------------------
    // Smooth Scroll
    //------------------------------------------------

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

});
