const hamburger = document.querySelector('.hamburger')

const sideBarProfile = () => {
  const asideBtn = document.querySelector('.aside-btn')
  const sideProfile = document.querySelector('.side-profile')
  const darken = document.querySelector('.darken')

  sideProfile.style.display = 'none'
  darken.style.display = 'none'

  const toggleSideProfile = () => {
    sideProfile.style.display = sideProfile.style.display === 'none' ? 'flex' : 'none'
    darken.style.display = darken.style.display === 'none' ? 'block' : 'none'
  }

  asideBtn.addEventListener('click', toggleSideProfile)
  darken.addEventListener('click', toggleSideProfile)

}

const hamburgerHandler = () => {
  const navigationButton = document.querySelectorAll('.nav-button')

  hamburger.addEventListener('click', () => {
    navigationButton.forEach(ul => {
      ul.style.display = ul.style.display === 'none' || '' ? 'flex' : 'none'
    })
  })

  const toggleNavBar = () => {
    if (window.innerWidth > 900) {
      navigationButton.forEach(ul => {
        ul.style.display = 'flex'
      })
    } else {
      navigationButton.forEach(ul => {
        ul.style.display = 'none'
      })
    }
  }

  toggleNavBar()
  window.addEventListener('resize', toggleNavBar)

}

const clickNavBarAndCloseIt = () => {
  const as = document.querySelectorAll('.li-nav-btn')

  as.forEach(a => a.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      hamburger.click()
    }
  }))
}

sideBarProfile()
hamburgerHandler()
clickNavBarAndCloseIt()