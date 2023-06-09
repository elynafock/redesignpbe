const MAX_CAROUSEL_ITEMS = 2;
let currentIndex = 0;
let size = 'lg'

/**
 * Go to next item, in a loop
 */
function next() {
  showItem((currentIndex + 1) % MAX_CAROUSEL_ITEMS);
}

/**
 * Go to previous item, in a loop
 */
function back() {
  showItem(Math.abs(currentIndex - 1) % MAX_CAROUSEL_ITEMS);
}

/**
 * Show a particular carousel item
 * @param {number} n index of updated carousel item
 */
function showItem(n) {
  const carouselImg = document.querySelector(".carousel-item-container img");

  currentIndex = n;
  carouselImg.setAttribute('src', `/static/banner/banner${n}-${size}.png`);
  carouselImg.setAttribute('alt', `Banner ${n + 1}`);
  updatePagination()
}

/**
 * Updates the pagination UI
 */
function updatePagination() {
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot, i) => {
    const className = currentIndex === i ? "dot selected" : "dot"
    dot.className = className
  })
}

/**
 * Update images according to device size 
 */
function updateImages() {
  size = isDesktop() ? 'lg' : 'sm'
  showItem(currentIndex)
}

/**
 * Create pagination dots
 */
function initPagination() {
  const pagination = document.querySelector(".pagination");

  for (let i = 0; i < MAX_CAROUSEL_ITEMS; i++) {
    const dot = document.createElement("span");
    dot.className = "dot"
    dot.addEventListener('click', () => showItem(i))
    pagination.appendChild(dot)
  }
}

window.addEventListener('resize', updateImages)

updateImages()
initPagination()
updatePagination()