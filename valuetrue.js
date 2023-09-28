

    document.addEventListener("DOMContentLoaded", function() {
        const downloadLinks = document.querySelectorAll(".download-link");
    
        downloadLinks.forEach(link => {
            const iconImg = link.querySelector(".save-icon img");
            const downloadText = link.querySelector("#down");
    
            link.addEventListener("click", function(event) {
                event.preventDefault();
                iconImg.src = "downloadedicon.png";
                link.style.backgroundColor = "orangered";
                link.style.color = "white";
                link.classList.add("downloaded");
                downloadText.textContent = "Downloaded";
    
                // Trigger the download
                const downloadURL = link.getAttribute("href");
                const linkAnchor = document.createElement("a");
                linkAnchor.setAttribute("href", downloadURL);
                linkAnchor.setAttribute("download", "");
                linkAnchor.click();
            });
    
            link.addEventListener("mouseenter", function() {
                if (!link.classList.contains("downloaded")) {
                    iconImg.src = "saveicon-white.png";
                    link.style.backgroundColor = "orangered";
                    link.style.color = "white";
                }
            });
    
            link.addEventListener("mouseleave", function() {
                if (!link.classList.contains("downloaded")) {
                    iconImg.src = "saveicon2.png";
                    link.style.backgroundColor = "white";
                    link.style.color = "orangered";
                }
            });
        });
    });
    

    function close_it() {
        form.style.opacity = "0";
        bg.style.opacity = "1";
        
    }
    