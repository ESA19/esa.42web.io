/*==================== MENÜYÜ GÖSTER Y GİZLİ ==============*/
const navMenu=document.getElementById('nav-menu'),
        navToggle=document.getElementById('nav-toggle'),
        navClose=document.getElementById('nav-close')






/*==================== MENÜYÜ GÖSTER  ==============*/
/*AÇMAK İÇİN*/
if(navToggle)
{
    navToggle.addEventListener('click',() =>
    {
        navMenu.classList.add('show-menu')
    })
}
/*==================== MENÜYÜ GÖSTER  ==============*/
/*KAPATMAK İÇİN*/
if(navToggle)
{
    navClose.addEventListener('click',()=>
    {
        navMenu.classList.remove('show-menu')
    })
}
/*==================== MENÜDEKİ BİR LİNKE TIKLANDIĞINDA MENÜNÜN KAPANMASI ==============*/
const navLink=document.querySelectorAll('.nav__link')
function linkAction()
{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))
/*==================== AKTİF LİNKİN GÖSTERİLMESİ ==============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*==================== Sitede Gezerken Menünün vurgulanması ==============*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*==================== Koyu Tema ==============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

