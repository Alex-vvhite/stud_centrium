const EVNT = {
  number: 0,
  date: 1,
  textBlock: "1111111111111111"
};

$(function(){
    $('.rev_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1230,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                //dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrrow: false
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
                
              }
            }
          ]
    })
});



const burger = document.querySelector('.hamburger_block')
if(burger){
    const menu = document.querySelector('.header-menu')
    const line = document.querySelector('.hamburger')
    burger.addEventListener("click", function (p) {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        
        line.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    })
}
//ТУТ НАЧИНАЕТСЯ ОТКРЫВАНИЕ ПОДРОБНОСТЕЙ ПРО МЕРОПРИЯТИЯ
var textDock = document.querySelector('.text_block');
const data = document.querySelector('.block_date');

const one_ev = document.querySelector('.first_event');
const two_ev = document.querySelector('.two_event');
const three_ev = document.querySelector('.three_event');
const four_ev = document.querySelector('.four_event');
const five_ev = document.querySelector('.five_event');
const six_ev = document.querySelector('.six_event');

// if(six_ev){
//   six_ev.addEventListener("click", function(p){
//     EVNT.textBlock = "«Цифровой прорыв. Сезон: искусственный интеллект» – серия хакатонов, чемпионатов и образовательных мероприятий, которые пройдут по всей России. Проект стал результатом объединения конкурсов «Хакатоны и лекции по искусственному интеллекту» и «Цифровой прорыв». Главными целями проекта являются популяризация технологий ИИ в России среди молодых специалистов и студентов, формирование ИТ-сообщества с фокусом на ИИ, стимулирование создания решений на базе ИИ, а также создание решений на основе ИИ для бизнеса и государственного сектора.";
//   })
// }

// //textDock.innerText = "«Цифровой прорыв. Сезон: искусственный интеллект» – серия хакатонов, чемпионатов и образовательных мероприятий, которые пройдут по всей России. Проект стал результатом объединения конкурсов «Хакатоны и лекции по искусственному интеллекту» и «Цифровой прорыв». Главными целями проекта являются популяризация технологий ИИ в России среди молодых специалистов и студентов, формирование ИТ-сообщества с фокусом на ИИ, стимулирование создания решений на базе ИИ, а также создание решений на основе ИИ для бизнеса и государственного сектора.";

//   textDock.innerText = EVNT.textBlock;



// const first = document.querySelector('.crc-first');
// const second = document.querySelector('.crc-second');
// const third = document.querySelector('.crc-third');
// const four = document.querySelector('.crc-four');
// const five = document.querySelector('.crc-five');

// second.addEventListener("click",function (p) {
//     first.classList.remove('_activebl')
//     third.classList.remove('_activebl')
//     four.classList.remove('_activebl')
//     five.classList.remove('_activebl')
//     second.classList.toggle('_activebl')
// })
// third.addEventListener("click",function (p) {
//     first.classList.remove ('_activebl')
//     second.classList.remove ('_activebl')
//     four.classList.remove('_activebl')
//     five.classList.remove ('_activebl')
//     third.classList.toggle('_activebl')
// })
// four.addEventListener("click",function (p) {
//     first.classList.remove ('_activebl')
//     second.classList.remove ('_activebl')
//     third.classList.remove ('_activebl')
//     five.classList.remove ('_activebl')
//     four.classList.toggle('_activebl')
// })
// five.addEventListener("click",function (p){
//     first.classList.remove ('_activebl')
//     second.classList.remove ('_activebl')
//     third.classList.remove ('_activebl')
//     four.classList.remove ('_activebl')
//     five.classList.toggle('_activebl')
// })
// first.addEventListener("click",function (p) {
//     five.classList.remove ('_activebl')
//     second.classList.remove ('_activebl')
//     third.classList.remove ('_activebl')
//     four.classList.remove ('_activebl')
//     first.classList.toggle('_activebl')
// })


 let events = [
  {
    name: " Сообщество 'Молодые инженеры ТЭК' ",
    date: "01.01.2022 - 31.12.2022",
    img: "/img/talk/first.jpg",
    link: "talk_1.html"
  },
  {
    name: "Всероссийский патриотический форум «Патриот - 2022»",
    date: "09.12.2022 - 12.12.2022",
    img: "/img/talk/second.jpg",
    link: "talk_2.html"
  },
  {
    name: " Больше, чем работа ",
    date: "18.06.2022 - 31.12.2022",
    img: "/img/talk/third.jpg",
    link: "talk_3.html"
  },
  {
    name: " Проект «Бизнес.Поколение»",
    date: "08.08.2022 - 27.11.2022",
    img: "/img/talk/four.jpg",
    link: "talk_4.html"
  },
  {
    name: "Литературный конкурс «Сочиняем жизнь»",
    date: "8 ноября 2022 года",
    img: "/img/talk/31-th.jpg",
    link: "talk_5.html" 
  },
  {
    name: "МОЛОДЫЕ УЧЕНЫЕ 2.0",
    date: "01.09.22 - 15.11.22",
    img: "/img/talk/six.jpg",
    link: "talk_6.html"
  },
  {
    name: "Конкурс видеороликов #QVEDOHero",
    date: "27 ноября 2022 г.",
    img: "/img/talk/32-th.jpg",
    link: "talk_7.html"
  },
  {
    name: " Всероссийская программа по развитию молодежного предпринимательства",
    date: "15.10.2021 - 31.12.2022",
    img: "/img/talk/eight.jpg",
    link: "talk_8.html"
  },
  {
    name: " «Даниил Гранин. Непрочитанное время» ",
    date: "30 ноября 2022",
    img: "/img/talk/33-th,jpg",
    link: "talk_9.html"
  },
  {
    name: " Всероссийский конкурс «Начни игру» ",
    date: "бессрочно",
    img: "/img/talk/ten.png",
    link: "talk_10.html"
  },
  {
    name: " Экософия ",
    date: "06.06.2022 - 01.05.2023",
    img: "/img/talk/eleven.jpg",
    link: "talk_11.html"
  },
  {
    name: " Цифровой прорыв. Сезон: искусственный интеллект ",
    date: "Заявки принимаются до 25.11.2022",
    img: "/img/talk/tvelf.png",
    link: "talk_12.html"
  },
  {
    name: "  Всероссийская олимпиада студентов «Я – профессионал» ",
    date: "29.09.22 - Май 2023 г.",
    img: "/img/talk/13-th.jpg",
    link: "talk_13.html"
  },
  {
    name: " Фотоконкурс Smithsonian ",
    date: "Дедлайн 30 ноября 2022 года.",
    img: "/img/talk/14-th.jpg",
    link: "talk_14.html"
  },
  {
    name: " Олимпиада по правоведению «Знатоки права» ",
    date: "15 декабря 2022 года.",
    img: "/img/talk/15-th.jpg",
    link: "talk_15.html"
  },
  {
    name: "Форум молодых лидеров YouLead",
    date: "26.11.22 - 27.11.22",
    img: "/img/talk/34-th.jpg",
    link: "talk_16.html"
  },
  {
    name: " Всероссийский конкурс видеорепортажей «МОЯ ЭТНО - СТРАНА ",
    date: "11.11.22 -20.12.22",
    img: "/img/talk/35-th.jpg",
    link: "talk_17.html"
  },
  {
    name: " Конференция «Студенческая наука: физическая культура и спорт»",
    date: "14-18 ноября 2022 года",
    img: "/img/talk/15.5-th.png",
    link: "talk_18.html"
  },
  {
    name: " Интеллектуальная социологическая викторина «Своя игра» ",
    date: "14 ноября 2022",
    img: "/img/talk/15.5-th.png",
    link: "talk_19.html"
  },
  {
    name: " Международный научный журнал «Правовая позиция» ",
    date: "бессрочно",
    img: "/img/talk/20-th.jpg",
    link: "talk_20.html"
  },
  {
    name: " Международный научный журнал «Психология человека и общества»",
    date: "бессрочно",
    img: "/img/talk/21-th.jpg",
    link: "talk_21.html"
  },
  {
    name: " Молодежный медиа-конкурс буктрейлеров «ProКниги». ",
    date: "21.02.22 - 16.12.22",
    img: "/img/talk/22-th.png",
    link: "talk_22.html"
  },
  {
    name: "Конкурс спортивных проектов «Ты в игре»",
    date: "23 декабря 2022 года",
    img: "/img/talk/36-th.jpg",
    link: "talk_23.html"
  },
  {
    name: " II Междисциплинарный медицинский форум ",
    date: "7 декабря 2022",
    img: "/img/talk/24-th.png",
    link: "talk_24.html"
  },
  {
    name: " Альфа-Шанс 2023 для студентов ",
    date: "01.02.23 - апрель 2023",
    img: "/img/talk/37-th.jpg",
    link: "talk_25.html"
  },
  {
    name: " Историко-патриотическая олимпиада «Октябрьская революция 1917 года»",
    date: " 09.11.22 - 11.11.22",
    img: "/img/talk/26-th.jpg",
    link: "talk_26.html"
  },
  {
    name: " Всероссийский конкурс «Будем жить» ",
    date: "03.10.22 - 27.11.22",
    img: "/img/talk/27-th.png",
    link: "talk_27.html"
  },
  {
    name: " VII Международная научно-практическая конференция ",
    date: "02 Декабря 2022 г.",
    img: "/img/talk/28-th.jpg",
    link: "talk_28.html"
  },
  {
    name: "«Сервис и предпринимательство в цифровой экономике XXI века»",
    date: "14 Ноября - 16 Ноября 2022 г.",
    img: "/img/talk/29-th.jpg",
    link: "talk_29.html"
  },
  {
    name: " «Антикоррупционный комплаенс в контексте современных моделей ...»",
    date: "25.09.22 - 25.12.24",
    img: "/img/talk/30-th.jpg",
    link: "talk_30.html"
  },
  {
    name: "Международный Географический диктант",
    date: "10 ноября",
    img: "/img/talk/38-th.jpg",
    link: "talk_31.html"
  },
  {
    name: "Конкурс для исследователей искусства и культуры «ГАРАЖ.txt»",
    date: "16 ноября 2022 года",
    img: "/img/talk/39-th.jpg",
    link: "talk_32.html"
  },
  {
    name: "Онлайн-форум «За учёными будущее»",
    date: "07.12.22 - 09.12.22",
    img: "/img/talk/40-th.jpg", 
    link: "talk_33.html"
  },
  {
    name: "Премия «Время молодых»",
    date: "26.06.22 - 31.12.22",
    img: "/img/talk/41-th.jpg", 
    link: "talk_34.html"
  },
  {
    name: "«Знаешь? Научи!»",
    date: " с 01.10.22 по 21.01.23",
    img: "/img/talk/42-th.jpg", 
    link: "talk_35.html"
  }, 
  {
    name: "VIII Актионады 2022 года",
    date: " 15.10.22 - 24.03.23",
    img: "/img/talk/43-th.jpg", 
    link: "talk_36.html"
  }, 
  {
    name: "Онлайн олимпиада «Профессия мечты»",
    date: "10.11.2022 - 30.12.2022",
    img: "/img/talk/44-th.jpg", 
    link: "talk_37.html"
  }, 
  {
    name: "«Умник» МГУ",
    date: " 13 ноября 2022 года ",
    img: "/img/talk/45-th.jpg", 
    link: "talk_38.html"
  }, 
  {
    name: "Всероссийский конкурс социальных проектов ИННОСОЦИУМ",
    date: " 13 ноября 2022 года ",
    img: "/img/talk/46-th.jpg", 
    link: "talk_39.html"
  }, 
];

let container = document.querySelector('.blocks_scroll');

let pagination = document.querySelector('#pagination');



let items = [];
for(let i = 1; i<=7;i++){
    let li = document.createElement('li');
    li.innerHTML = i;
    li.classList.toggle('circle');
    pagination.appendChild(li);
    items.push(li);
}

showPage(items[0]);

for(let item of items){
    item.addEventListener('click', function(){
        showPage(this);
    })
}


function showPage(item){
    let active =document.querySelector('#pagination li._activebl')
    if(active){
        active.classList.remove('_activebl');
    }
    item.classList.toggle('_activebl');
    let pageNum = +item.innerHTML;

    let start = (pageNum - 1) * 6;
    let end = start  + 6;

    let notes = events.slice(start,end);
    container.innerHTML = '';

    for(let note of notes){
        let block = document.createElement('div');
        block.classList.toggle('block');
        container.appendChild(block);
        
        let namee = document.createElement('div');
        namee.classList.toggle('name');
        namee.innerHTML = note.name;
        block.appendChild(namee);

        let date = document.createElement('div');
        date.classList.toggle('date');
        date.innerHTML = note.date;
        block.appendChild(date);

        let image = document.createElement('div');
        image.classList.toggle('image');
        block.appendChild(image);

        let img = document.createElement('img');
        img.classList.toggle('img');
        img.src = note.img;
        image.appendChild(img);

        let lnk = document.createElement('a');
        lnk.classList.toggle('many');
        lnk.href = note.link;
        lnk.innerHTML = 'Подробнее';
        block.appendChild(lnk);

    }
}




  


