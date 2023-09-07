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
