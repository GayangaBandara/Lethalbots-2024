document.addEventListener("DOMContentLoaded", () => {
  const galleryData = [
    { src: "images/gallery/ga1.jpg" },
    { src: "images/gallery/ga2.jpg" },
    { src: "images/gallery/ga3.jpg" },
    { src: "images/gallery/ga4.jpg" },
    { src: "images/gallery/ga5.jpg" },
    { src: "images/gallery/ga6.jpg" },
    { src: "images/gallery/ga7.jpg" },
    { src: "images/gallery/ga8.jpg" },
    { src: "images/gallery/ga9.jpg" },
    { src: "images/gallery/ga10.jpg" },
    { src: "images/gallery/ga11.jpg" },
    { src: "images/gallery/ga12.jpg" },
    { src: "images/gallery/ga13.jpg" },
    { src: "images/gallery/ga14.jpg" },
    { src: "images/gallery/ga15.jpg" },
    { src: "images/gallery/ga16.jpg" },
    { src: "images/gallery/ga17.jpg" },
    { src: "images/gallery/ga18.jpg" },
    { src: "images/gallery/ga19.jpg" },
    { src: "images/gallery/ga20.jpg" },
    { src: "images/gallery/ga21.jpg" },
    // Add more images as needed
  ];

  const itemsPerPage = 9;
  let currentPage = 1;

  const gallery = document.getElementById("gallery");
  const pagination = document.getElementById("pagination");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const pageNumber = document.getElementById("page-number");

  function displayGalleryPage(page) {
    gallery.innerHTML = "";
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToShow = galleryData.slice(start, end);

    itemsToShow.forEach((item) => {
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("gallery-item");
      galleryItem.innerHTML = `
          <img src="${item.src}" alt="${item.title}" class="gallery-image">
  
        `;
      galleryItem.addEventListener("click", () =>
        openPopup(item.src, item.title, item.author)
      );
      gallery.appendChild(galleryItem);
    });

    pageNumber.textContent = page;
    prevBtn.disabled = page === 1;
    nextBtn.disabled = end >= galleryData.length;
  }

  function openPopup(src, title, author) {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    const popupCaption = document.getElementById("popup-caption");
    popup.style.display = "block";
    popupContent.src = src;
    popupCaption.innerHTML = `<h3>${title}</h3><p>@ ${author}</p>`;
  }

  document.getElementById("close").addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
  });

  document.getElementById("popup").addEventListener("click", (e) => {
    if (e.target === document.getElementById("popup")) {
      document.getElementById("popup").style.display = "none";
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayGalleryPage(currentPage);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage * itemsPerPage < galleryData.length) {
      currentPage++;
      displayGalleryPage(currentPage);
    }
  });

  displayGalleryPage(currentPage);
});
