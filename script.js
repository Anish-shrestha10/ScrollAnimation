const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  const viewportHeight = window.innerHeight;

  cards.forEach((card) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.top + cardRect.height / 2;

    // If the card's center is near the viewport center, make it active
    if (Math.abs(viewportHeight / 2 - cardCenter) < cardRect.height / 2) {
      card.classList.add("visible");
    } else {
      card.classList.remove("visible");
    }
  });
});
