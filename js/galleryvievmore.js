document.addEventListener("DOMContentLoaded", () => {
    const galleryData = [
      { src: "images/gallery/ga1.jpg" },
      { src: "images/gallery/ga2.jpg" },
      { src: "images/gallery/ga3.jpg" },
      { src: "images/gallery/ga4.jpg" },
      { src: "images/gallery/ga5.jpg" },
      { src: "images/gallery/ga6.jpg" },
      { src: "images/gallery/ga7.jpg" },
      // Add more images as needed
    ];
  
    const itemsPerPage = 6;
    let currentPage = 1;
  
    const gallery = document.getElementById("gallery");
    const viewMoreBtn = document.getElementById("view-more");
  
    function displayGalleryPage(page) {
      gallery.innerHTML = "";
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const itemsToShow = galleryData.slice(start, end);
  
      itemsToShow.forEach((item) => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="Gallery Image" class="gallery-image">
        `;
        galleryItem.addEventListener("click", () =>
          openPopup(item.src)
        );
        gallery.appendChild(galleryItem);
      });
    }
  
    function openPopup(src) {
      const popup = document.getElementById("popup");
      const popupContent = document.getElementById("popup-content");
      popup.style.display = "block";
      popupContent.src = src;
    }
  
    document.getElementById("close").addEventListener("click", () => {
      document.getElementById("popup").style.display = "none";
    });
  
    document.getElementById("popup").addEventListener("click", (e) => {
      if (e.target === document.getElementById("popup")) {
        document.getElementById("popup").style.display = "none";
      }
    });
  
    // Load the first page initially
    displayGalleryPage(currentPage);
  
    // Redirect to another page when View More is clicked
    viewMoreBtn.addEventListener("click", () => {
      window.location.href = "gallery.html","_blank"; // Update with your actual URL
    });
  });
  