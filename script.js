let products = [
    {href: 'product1.html', text: 'Ужас Аркхэма. Карточная игра', images: ['ark2.jpg','ark.jpg'], price: '3 490 &#8381', info: 'Нечто безумное и страшное пробуждается в небольшом городке Аркхэм. Лишь вам, в лице отважного сыщика,<br> под силу остановить те древние и немыслимые кошмары,'},
    {href: 'product2.html', text: 'Gloomhaven. Мрачная Гавань', images: ['gav2.jpg', "gav1.jpg"], price:'13 990 &#8381', info: 'Уж не знаю, что за странники вроде вас забыли в Мрачной Гавани,<br> но уверен я в одном – чтобы выжить, придётся работать.'},
    {href: 'product3.html', text: 'Бункер',images: ['bun1.jpg',"bun2.jpg"], price: '2 990 &#8381', info: 'Случилось страшное: глобальная катастрофа, конец света, апокалипсис – кому как больше нравится.<br> Чтобы выжить, вам срочно нужно попасть в бункер, но в вашей группе слишком много людей, <br>на всех внутри не хватит ни провизии, ни места.' },
    {href: 'product4.html', text: 'Манчкин',images: ['man2.jpg', "man1.jpg"], price: '1 290 &#8381', info: 'Культовый силуэт вне времени от американского бренда' },
    {href: 'product5.html', text: 'Каркассон',images:['kar1.jpg','kar2.jpg'], price: '1 990 &#8381', info: 'Настольная игра "Каркассон" (Carcassonne) пользуется славой одной из лучших<br> настольных игр мира. В чём превосходство "Каркассона"?' },
    {href: 'product6.html', text: 'Catan: Колонизаторы', images:['catan1.jpg','catan2.jpg'] , price: '3 990 &#8381', info: 'Серия "Колонизаторы" – одна из самых известных,<br> интересных и оригинальных семейных настольных игр в мире.<br> Всемирную известность она получила ещё в далёком 1995 году, когда получила<br> престижную премию Spiel des Jahres'},
    {href: 'product8.html', text: 'Палео', images: ['pal1.jpg','pal2.jpg'], price: '4 990 &#8381', info: 'Действие игры разворачивается в каменном веке.<br> Племя первобытных людей старается выжить в окружении дикой природы.'},
    {href: 'product9.html', text: 'Взрывные котята', images: ['kot1.jpg','kot2.jpg'], price: '990 &#8381', info: 'Вот вам загадка – вместе с нами на Земле проживает более пятисот миллионов этих милейших созданий,<br>фото и видео с их участием набирают невероятную популярность в интернете,<br> мы очень любим их гладить, чесать им пузико и щекотать подушечки ног'},
    {href: 'product10.html', text: 'Игра Престолов. Второе издание', images: ['pres.jpg','pres2.jpg'], price: '5 490 &#8381', info: 'Король Роберт Баратеон мертв, а земли Вестероса готовятся к сражениям…'},
    {href: 'product11.html', text: 'Эпичные схватки боевых магов: Битва на горе Черепламени', images: ['che1.jpg','che2.jpg'], price: '1 490 &#8381', info: 'Добро пожаловать в мир крышесносной магии!<br> Здесь нет места для ваших глупых фокусов, магия у нас сокрушительная,<br> извращённая и смертельная!'},
    {href: 'product12.html', text: 'Ticket to Ride: Европа', images: ['tick1.jpg','tick2.jpg'], price: '4 990 &#8381', info: 'Эта увлекательная игра предлагает захватывающее путешествие из дождливого<br> Эдинбурга в солнечный Константинополь. В настольной игре "Ticket To Ride: Европа"<br> Вы посетите величественные европейские города, осталось только взять билет на поезд. '},
    {href: 'product13.html', text: 'Неудержимые единорожки', images: ['edi1.jpg','edi2.jpg'], price: '990 &#8381', info: '"Неудержимые единорожки" – это весёлая карточная игра, которая украсит собой любую вечеринку.'},
    {href: 'product14.html', text: 'Таверна "Красный Дракон"', images: ['dra1.jpg','dra2.jpg'], price: '1 790 &#8381', info: 'Многие игры рассказывали нам о невероятных приключениях разномастных героев,<br> об их великих подвигах и побеждённых ими злодеях, об опасных подземельях и смертельных ловушках,<br> об ужасных монстрах, схватка с которыми может стоить жизни! '},
    {href: 'product15.html', text: 'Место преступления', images: ['m1.jpg','m2.jpg'], price: '2 990 &#8381', info: 'Лондон, наши дни. Вы только что вышли из кабинета комиссара.<br> Вам поручено расследование гибели бедолаги в Гайд-парке. Вы не новичок,<br> но когда речь идёт о смерти, всегда становится не по себе, а в данном случае подробности преступления,<br> откровенно настораживают..'},
    {href: 'product16.html', text: 'Бэнг!', images: ['ba1.jpg','ba2.jpg'], price: '990 &#8381', info: 'Это карточная игра, которая с лёгкостью перенесёт вас в классический спагетти-вестерн,<br> с салунами, индейцами и обязательными перестрелками!'},
    {href: 'product17.html', text: 'Рик и Морти: Всмортить всё', images: ['rik1.jpg','rik2.jpg'], price: '990 &#8381', info: 'Вабба лабба даб даб! Что, соскучились? Ну ещё бы, ведь с вами огурчик Рииииик!'},
    {href: 'product18.html', text: 'Зомби в доме: Заражение', images: ['z1.jpg','z2.jpg'], price: '2 990 &#8381', info: 'В дизайне сникеров B25 Runner спортивный стиль сочетается с изысканной эстетикой модного дома.<br> Они выполнены из замши черного цвета и белой технической сетки'},
    {href: 'product19.html', text: 'Small World: Маленький мир', images: ['smal1.jpg','smal2.jpg'], price: '4 990 &#8381', info: 'Всё больше новых народов заселяет ваши земли, и всем приходится тесниться.<br> А ведь предки завещали вам эти земли не просто так – они-то надеялись,<br> что вы сможете построить сильную империю, которая покорит весь мир…'},
    {href: 'product20.html', text: 'Фак мой мозг', images: ['fak1.jpg','fak2.jpg'], price: '490 &#8381', info: 'Неважно, слышали ли вы про эффект Струпа или нет. Напомним,<br> так называется процесс затруднения во время называния цвета слов, значение которых с ним не совпадает.'},
    {href: 'product21.html', text: 'Трамвай смерти', images: ['tr1.jpg','tr2.jpg'], price: '2 490 &#8381', info: 'Обычный стрелочник каждый день на железной дороге переводит поезда на разные направления.<br> Но он и представить не мог, что ему придётся заниматься чем-то кроме разведения путей.'},
];
 
 function showModal(messageText, buttonText) {
    //alert('Sorry, not ready yet...\nИзвинте, еще не готово...');
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    modal.style.top = '50px';
    modal.style.left = '47%';
    modal.style.transform = 'scale(01';
    
    
 
 
    let message = modal.getElementsByClassName('message')[0];
    message.innerHTML = messageText;
    let button = modal.getElementsByTagName('button')[0];
    button.innerHTML = buttonText;
 
    document.body.style.overflow = 'hidden';
    let = overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
    overlay.style.backgroundcolor = 'rgba(0, 100, 200, 0.3)';
 
    return false;
 
 
 }
 function hideModal() {
     let modal = document.getElementsByClassName('modal')[0];
     setTimeout(function(){
         modal.style.visibility = 'hidden'
     }, 350);
     modal.style.opacity = '0';
     modal.style.top = '100%';
     modal.style.transform = 'scale(0)';
 
     document.body.style.overflow = 'auto';
     let = overlay = document.getElementsByClassName('overlay')[0];
     setTimeout(function(){
         overlay.style.visibility = 'hidden';
     }, 200);
     overlay.style.opacity = '0';
     overlay.style.backgroundcolor = 'rgba(255, 0, 0, 0.3)';
 
     
 }
 function notReadyAlert(event) {
     showModal('Sorry, not ready yet!<br>Извинте, еще не готово!', 'Эх, жаль');
     event.preventDefault();
     return false;
     }
 
 function notReadyAlert1() {
     showModal('Звоните, если угадаете)))0))))','Прости, друг');
    return false;
 }
 function notReadyAlert2() {
     showModal('Это наш сайт', 'НеНаСтОяЩиЙ');
    return false;
 }
 function notReadyAlert3() {
     showModal('Хмм... или не прикол', 'Да ладно, не важно, что я там сказал');
    return false;
 }
 
 function search() {
    let cards = document.getElementsByClassName('card');
    let name = document.getElementById('search').value;
    let nameRegExp = new RegExp(name, 'i');
    for (let i = 0; i<products.length; i++) {
       let product = products[i];
       if(nameRegExp.test(product.text)) {
          let card = cards[i];
          card.style.border = '3px dashed red';
          card.style.backgroundcolor = 'yellow';
 
          setTimeout(function(){
             card.style.border = 'none';
             card.style.backgroundcolor = '';
          }, 2000);
          
       }
    }
 }
 function generateMenu() {
    let menu = document.querySelector('nav.main-menu ul');
    menu.innerHTML = '';
    let items = [
       {href: 'index.html', text: 'Товары'},
       {href: 'contacts.html', text: 'Контакты'},
       {href: 'discont.html', text: 'Акции'},
    ];
 
    for(let i = 0; i<items.length; i++){
       let link = document.createElement('a');
       link.innerText = items[i].text;
       link.href = items[i].href;
       if (items[i].href == '') {
          link.addEventListener('click', notReadyAlert);
       }
 
       let menuItem = document.createElement('li');
       menuItem.appendChild(link);
 
       menu.appendChild(menuItem);
    }
 }
 function showProductInfo(product) {
    let imagesList = '';
    for(let i=0; i<product.images.length; i++){
        imagesList = imagesList + `<div><img src="${product.images[i]}"></div>`
    }
        showModal(`Информация о товаре
            ${imagesList}
            <div>${product.text}</div>
            <div>${product.price}</div>
            <div><i>${product.info}</i></div>
            `, 'Спасибо');
        }
        function generateCard() {
            let main = document.querySelector('main');
            for(let i = 0; i<products.length; i++){
               let product = document.createElement('div');
               product.className= 'card';
               product.innerHTML = `
               <a href="#">
                  <div class="image"><img src="${products[i].images[0]}"></div>
                  <div class="product-name">"${products[i].text}"</div>
                  <div class="price" onmouseover="ColorPrice(this)" onmouseout="ColorPrice1(this)">${products[i].price}</div>
                  </a>
                  `;
               product.querySelector('a').addEventListener('click', function(){
                  showProductInfo(products[i]);
               });
         
               main.appendChild(product);
            }
         }
  function loaded() {
     let searchbox = document.getElementById('search');
     searchbox.addEventListener('keydown', function(key){
        if(key.key == 'Enter')
            search();
     });
 
     generateMenu();
     generateCard();
 
  }
  function ColorPrice(text){
     console.log('ПРивет');
     text.style.color = 'brown';
     text.style.fontWeight = 'blood';
  }
  function ColorPrice1(text){
     text.style.color = 'black';
     text.style.fontWeight = 'black';
  }


  