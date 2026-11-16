const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav-list");

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuButton.focus();
    }
  });
  // CC Global Summit 2015 - "More" button for the speakers (mobile and tablet)

const moreButton = document.querySelector(".more-btn");
const speakerList = document.querySelector("#speaker-list");

if (moreButton && speakerList) {
  const label = moreButton.querySelector(".more-label");

  moreButton.addEventListener("click", () => {
    const isOpen = speakerList.classList.toggle("is-open");
    moreButton.setAttribute("aria-expanded", String(isOpen));
    if (label) label.textContent = isOpen ? "Less" : "More";
  });
}
}
