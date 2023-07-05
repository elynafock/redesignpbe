/**
 * get all the 'details' elements
 * @type {NodeListOf<HTMLDetailsElement>}
 */
const allDetails = document.querySelectorAll('details')

/**
 * opens all the 'details' elements
 */
function openDetails() {
  allDetails.forEach((details) => {
    details.setAttribute('open', 'true')
  })
}

/**
 * closes all the <details/> elements
 */
function closeDetails() {
  allDetails.forEach((details) => {
    details.removeAttribute('open')
  })
}
function handleDetails() {
  if (isDesktop()) {
    openDetails()
  } else {
    closeDetails()
  }
}
/**
 * this is responsible to detect if user is changing the browser's width
 */
window.addEventListener('resize', handleDetails)
handleDetails()