// Habilidades
const skills = document.querySelectorAll('.skills__icons .bx');
const descricao = document.querySelector('.skills__texto');
const descricaoSkills = [
    'HTML5 (Hypertext Markup Language)<br><br> É uma das primeiras e principais linguagens de marcação padrão para páginas da web. O HTML serve para o desenvolvimento de páginas que contenham conteúdos simples, como textos, imagens, áudio, vídeos, entre outras coisas.',
    'CSS3 (Cascading Style Sheets) <br><br>É uma linguagem de estilo que descreve a apresentação de um documento HTML.',
    'JavaScript <br><br> É uma linguagem de programação de alto nível, interpretada e dinâmica, que é amplamente utilizada na web para adicionar interatividade e funcionalidades avançadas às páginas da web.',
    'React <br><br> É uma biblioteca de JavaScript utilizada para construir interfaces de usuário interativas e eficientes. Desenvolvido e mantido pelo Facebook, o React permite que os desenvolvedores construam aplicativos da web de uma maneira declarativa e componentizada.',
    'GitHub <br><br> É uma plataforma de controle de versões gratuita que serve para gerir projetos e permite a colaboração entre uma grande comunidade de desenvolvedores, contribuindo com melhorias e comentários.'
];

let intervalo;

skills.forEach((elemento, index) => {
    elemento.addEventListener('mouseover', () => {
        let currentIndex = 0;
        intervalo = setInterval(() => {
            const texto = descricaoSkills[index].split(/\s+/);
            const palavra = texto[currentIndex];
            descricao.innerHTML += palavra + ' ';
            currentIndex++;

            if (currentIndex === texto.length) {
            clearInterval(intervalo);
            }
        }, 50);
    });


    elemento.addEventListener('mouseout', () => {
      clearInterval(intervalo);
      descricao.innerHTML = '';
    });
});

// section window
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('#sectionId');
    
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                if (window.innerWidth <= 768 && targetId === 'about' || targetId === 'skills') {
                    const targetTop = targetSection.offsetTop;
                    const navHeight = document.querySelector('.cabecalho').clientHeight;
                    window.scrollTo({
                        top: targetTop - navHeight + 0.5,
                        behavior: 'smooth'
                    });
                } else {
                    const windowHeight = window.innerHeight;
                    const sectionHeight = targetSection.clientHeight;
                    const offset = (windowHeight - sectionHeight) / 2;
                    const targetTop = targetSection.offsetTop - offset;
                    window.scrollTo({
                        top: targetSection.offsetTop - offset,
                        behavior: 'smooth',
                    });
                }
            }

            if (targetSection) {
                if (window.innerWidth <= 800 && window.innerHeight <= 400) {
                    const targetTop = targetSection.offsetTop;
                    const navHeight = document.querySelector('.cabecalho').clientHeight;
                    window.scrollTo({
                        top: targetTop - navHeight + 1,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    let sections = document.querySelectorAll('section');
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 340;
            let height = sec.offsetHeight;

            if(top >= offset && top < offset + height) {
                if (!sec.classList.contains('show.animacao')) {
                    sec.classList.add('show-animacao');

                    let animacaoAtt = sec.querySelectorAll('.animacao');
                    animacaoAtt.forEach(span => {
                        span.remove();
                    });
                }
            }
            else if (window.innerHeight > 400) {
                sec.classList.remove('show-animacao');
            }
        });
    }
});

// menu header
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const menuItems = document.querySelectorAll('.cabecalho__navegacao a');

    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            menu.checked = false;
        });
    });
});

// carrossel
document.addEventListener('DOMContentLoaded', function () {

    const projectSwiper = new Swiper('.project__conteudo__container', {
        loop: true,
        effect: 'coverflow',
        grabCursor: false,
        centeredSlides: true,
        slidesPerView: 1,
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 400, 
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const certSwiper = new Swiper('.card__container__responsive', {
        loop: false,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
});
