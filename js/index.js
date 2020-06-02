// Your code goes here
const title = document.querySelector('.logo-heading')
const content = document.querySelectorAll('.content-section')
const nav = document.querySelector('nav')


const newLinkProps = {
    href: '#',
    textContent: 'Color Party',
    className: 'new-link',
}
const newlink = document.createElement('a')

newlink.href = newLinkProps.href
newlink.textContent = newLinkProps.textContent
newlink.classList.add(newLinkProps.className)

title.addEventListener('click', function (){
    title.style.color = randmColor();
    nav.prepend(newlink)

})

document.addEventListener('keydown', closeOnEsc)

function closeOnEsc(event){
    if(event.key === 'Escape'){
        newlink.remove();
        document.body.style.backgroundColor = 'white'
        allLinks.forEach(link=>{
            link.style.display = 'block'
        })
    }
}



newlink.addEventListener('click', backgroundColor)

const navHome = document.querySelector('.nav-link')

const allLinks = document.querySelectorAll('nav a')

allLinks.forEach(link =>{
    link.addEventListener('click', event =>{
        allLinks.forEach(link =>{
            event.preventDefault();
            link.style.display = 'none'
        })
        event.target.style.display = 'inline'
    })
})

function hide(){
    let links = document.querySelector('.nav-link:nth-of-type(2)')
    if(links.style.display === 'none'){
        links.style.display = 'block'
    } else {
        links.style.display = 'none'
    }
}

const welcomeHeading = document.querySelector('.intro h2')
const welcomeText = document.querySelector('.intro p')

const letsGoHeading = document.querySelector('.text-content h2')
const letsGoText = document.querySelector('.text-content p')

const adventureHeading = document.querySelector('.text-content:nth-of-type(2) h2')
const adventureText = document.querySelector('.text-content:nth-of-type(2) p')

welcomeHeading.addEventListener('mouseover', event =>{
    event.stopPropagation();
    welcomeText.style.color = randmColor();
})

welcomeText.style.display = 'none'

const paragraphs = document.querySelectorAll('body p')
paragraphs.forEach(p =>{
    p.style.display = 'none'
})

welcomeHeading.addEventListener('click', event =>{
    welcomeText.style.display = 'block'
})

letsGoHeading.addEventListener('mouseover', event =>{
    event.stopPropagation();
    letsGoText.style.color = randmColor();
})

letsGoHeading.addEventListener('click', event =>{
    letsGoText.style.display = 'block'
})

adventureHeading.addEventListener('click', event =>{
    adventureText.style.display = 'block'
})



function backgroundColor(){
    document.body.style.backgroundColor = randmColor();
}


function randmColor() {
    let color = "#";
  for(let i = 0; i < 6; i++){
        color += Math.floor((Math.random() * 16)).toString(16);
  }
    return color;
  
  }



