const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    const links = document.querySelectorAll('.nav-overlay a');

 
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });

 
    links.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            menu.classList.remove('active');
        });
    });
const langButtons = document.querySelectorAll('.lang-switch button');
const translateElements = document.querySelectorAll('[data-key]');

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.id.split('-')[1]; // получаем 'ru' или 'en'
        
      
        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

     
        translateElements.forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });
    });
});
const translations = {
    ru: {
        hero_title: "Привет, я Кайыржан",
        hero_desc: "Создаю современные веб-интерфейсы с вниманием к деталям.",
        portfolio: "Портфолио",
        btn_view: "Смотреть проект",
        project_1_title: "WIN-BASKETBALL",
        project_1_desc: "Сайт для баскетбольной организации города Актау.",
        second_project: "Персональный сайт для репетитора по математике.",
        contact_title: "Давай работать вместе",
        footer:"Открыт для новых предложений и крутых проектов.",
        nav_about: "ОБО МНЕ",
 
    },
    en: {
        hero_title: "Hi, I'm Kaiyrzhan",
        hero_desc: "Crafting modern web interfaces with attention to detail.",
        portfolio: "Portfolio",
        btn_view: "View Project",
        project_1_title: "WIN-BASKETBALL",
        project_1_desc: "Website for a basketball organization in Aktau city.",
        second_project: "Personal website for a math teacher",
        contact_title: "Let's work together",
        footer:"Open to new proposals and cool projects.",
        nav_about: "ABOUT ME",
    }
};

document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
    if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73)) {
        return false;
    }
}
