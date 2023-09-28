document.addEventListener("DOMContentLoaded", function() {
    const downloadLinks = document.querySelectorAll(".download-link");

    downloadLinks.forEach(link => {
        const iconImg = link.querySelector(".save-icon img");
                
        link.addEventListener("mouseenter", function() {
            iconImg.src = "saveicon-white.png";
            link.style.backgroundColor = "orangered";
            link.style.color = "white"
        });

        link.addEventListener("mouseleave", function() {
            iconImg.src = "saveicon2.png";
            link.style.backgroundColor = "white";
            link.style.color = "orangered"
        });
    });
});



