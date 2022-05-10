window.addEventListener("scroll", onScroll)

// Chamando a função fora do evento para corrigir um bug onde o código não executava a função caso o site fosse aberto em uma sessão 
///que não seja a HOME 
onScroll()

function onScroll() {
    showNavOnScroll()
    showBackToTopButtomOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    // verificar se a sessão passou da linha
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // verificar se a base está abaixo da linha alvo
    const sectionEndsAt = sectionTop + sectionHeight

    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    // limites da sessão 
    const sectionBoudaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const menuElement = document.querySelector(`.menu a[href *=${section.getAttribute('id')}]`)

    menuElement.classList.remove('active')
    if (sectionBoudaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnScroll() {
    if(scrollY > 0) {
        navigation.classList.add("scroll")
    } else {
        navigation.classList.remove("scroll")
    }

}

function showBackToTopButtomOnScroll() {
    if(scrollY >= 500) {
        backToTopButton.classList.add("show")
    } else {
        backToTopButton.classList.remove("show")
    }
}

function openMenu() {
    document.body.classList.add("menu-expanded")
}

function closeMenu() {
    document.body.classList.remove("menu-expanded")
}

const scrollRevealSettings = {
    origin: "top",
    distance: "30px",
    duration: 700,
}

ScrollReveal(scrollRevealSettings).reveal(`#home, 
#home img, 
#home .stats, 
#services, 
#services header, 
#services .card, 
#about, 
#about header, 
#about .content,
#contact,
#contact header,
#contact .content`);