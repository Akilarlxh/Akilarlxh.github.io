//autumn_banner

var autumnBanner = document.querySelector('#autumnBanner')
if (autumnBanner) {
  var images = document.querySelectorAll('#autumnBanner > div > img')
  autumnBanner.addEventListener('mousemove', (e) => {
    let percentage = e.clientX / window.outerWidth
    let offset = 10 * percentage
    let blur = 20

    for (let [index, image] of images.entries()) {
      offset *= 1.3

      let blurValue = (Math.pow((index / images.length - percentage), 2) * blur)

      image.style.setProperty('--offset', `${offset}px`)
      image.style.setProperty('--blur', `${blurValue}px`)
    }
  })
}
//winter_banner

var winterBanner = document.querySelector('#winterBanner')
if (winterBanner) {
  var startingPoint
  winterBanner.addEventListener('mouseenter', (e) => {
    startingPoint = e.clientX
    winterBanner.classList.add('moving')
  })

  winterBanner.addEventListener('mouseout', (e) => {
    winterBanner.classList.remove('moving')
    winterBanner.style.setProperty('--percentage', 0.5)
  })

  winterBanner.addEventListener('mousemove', (e) => {
    let percentage = (e.clientX - startingPoint) / window.outerWidth + 0.5

    winterBanner.style.setProperty('--percentage', percentage)
  })
}
