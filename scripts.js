const asideBtn = document.querySelector('.aside-btn')
const sideProfile = document.querySelector('.side-profile')
const darken = document.querySelector('.darken')

darken.style.display = 'none'

const toggleSideProfile = () => {
  sideProfile.classList.toggle('hide-profile')
  darken.style.display = darken.style.display === 'none' ? 'block' : 'none'
}

asideBtn.addEventListener('click', toggleSideProfile)
darken.addEventListener('click', toggleSideProfile)
