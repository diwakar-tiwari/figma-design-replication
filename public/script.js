let currentIndex = 0;
const carouselContainer = document.querySelector(".carousel-container");
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

// Clone the first and last items
const firstItemClone = items[0].cloneNode(true);
const lastItemClone = items[totalItems - 1].cloneNode(true);

// Append and prepend the clones
carouselContainer.appendChild(firstItemClone);
carouselContainer.insertBefore(lastItemClone, items[0]);

const updatedItems = document.querySelectorAll(".carousel-item");
const updatedTotalItems = updatedItems.length;

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex--;
  updateCarousel();

  // If we are at the fake last item, instantly move to the real last item
  if (currentIndex < 0) {
    setTimeout(() => {
      carouselContainer.style.transition = "none";
      currentIndex = totalItems - 1;
      updateCarousel();
      setTimeout(() => {
        carouselContainer.style.transition = "transform 0.5s ease-in-out";
      });
    }, 500);
  }
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex++;
  updateCarousel();

  // If we are at the fake first item, instantly move to the real first item
  if (currentIndex >= updatedTotalItems - 1) {
    setTimeout(() => {
      carouselContainer.style.transition = "none";
      currentIndex = 0;
      updateCarousel();
      setTimeout(() => {
        carouselContainer.style.transition = "transform 0.5s ease-in-out";
      });
    }, 500);
  }
});

function updateCarousel() {
  const offset = (-currentIndex * 100) / 3; // 33.33% for each item in the container
  carouselContainer.style.transform = `translateX(${offset}%)`;
}

document
  .getElementById("open-form-button")
  .addEventListener("click", function () {
    document.getElementById("form-popup").style.display = "flex";
  });

document
  .getElementById("close-form-button")
  .addEventListener("click", function () {
    document.getElementById("form-popup").style.display = "none";
  });

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("form-popup")) {
    document.getElementById("form-popup").style.display = "none";
  }
});

let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  let menuBtnLinkToggle = document.getElementById("nav-menu-link-sm");

  if (isMenuOpen) {
    menuBtnLinkToggle.classList.remove("d-sm-none");
  } else {
    menuBtnLinkToggle.classList.add("d-sm-none");
  }
}

document
  .getElementById("menu-btn-toggle")
  .addEventListener("click", toggleMenu);




  function getFormData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let language = document.getElementById("language").value;
  
    // Validate the form submission for not null
    if (!name || !email || !phone || !language) {
      alert("Please enter all the required fields");
      return null;
    }
  
    return {
      name,
      email,
      phone,
      language,
    };
  }
  
  async function handleFormSubmit(e) {

    e.preventDefault();

    let formObj = getFormData();
    if (formObj == null) return;
  
    try {
      const res = await fetch("/book-demo", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formObj),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert("Form submitted successfully");
      } else {
        alert("Fail to submit: " + data.message);
      }
    } catch (error) {
      alert("Error submitting form: " + error.message);
    }
  }

  document.getElementById("demo-form").addEventListener("submit", handleFormSubmit);
  
