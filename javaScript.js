//CONST
const ITEMS_CONTAINER = document.getElementsByClassName('contentSlider')[0];
//END CONST

//FUNCTIONS
function getProductItem(picture, name, price) {
    let divParent = document.createElement('div');
    divParent.className = 'slide';

    let pictureBlock = document.createElement('img');
    pictureBlock.src = picture;
    pictureBlock.className = 'stylePicture';

    let namesBlock = document.createElement('P');
    namesBlock.textContent = name;
    namesBlock.className = 'styleNames';

    let pricesBlock = document.createElement('P');
    pricesBlock.textContent = price;
    pricesBlock.className = "stylePriceText";

    divParent.appendChild(pictureBlock);
    divParent.appendChild(namesBlock);
    divParent.appendChild(pricesBlock);

    return divParent;
}

function clearSlider() {
    const sliders = document.querySelectorAll('.slide');
    sliders.forEach(slide => {
        slide.remove();
    });
}

//END FUNCTIONS


//START MAIN
//Массивы
//Получать данный из файла!! Обязательно
let picture = ['picture/icon1.png','picture/icon2.png','picture/icon3.png','picture/icon4.png','picture/icon5.png','picture/icon6.png'];
let names = ['Зеркало','Диван','Набор 4 стула','Стол','Журнальный столик','Шкаф','Кресло'];
let prices = ['1400','8000','3800','2200','2000','3500','5000'];

let sliderArray = new Array();


//процесс поиска и синхронизации
let index = 1;
if ( index < 0){
    index = picture.length - 1
} else if (index == picture.length){
    index = 0;
}


for (let idx = 0; idx < picture.length; idx++) {
    sliderArray.push(getProductItem(picture[idx], names[idx], prices[idx]))
}


//Button
//кнопка возврата
let leftButton = document.getElementById('leftButton');
leftButton.className = 'button';

leftButton.addEventListener('click', () => {

    clearSlider()

    index = --index;
  
    if ( index < 0){
        index = picture.length - 1
    }

    ITEMS_CONTAINER.appendChild(sliderArray[index]);
    ITEMS_CONTAINER.appendChild(sliderArray[(index + 1) % picture.length]);
    
})


//кнопка переключения
let rightButton = document.getElementById('rightButton');
rightButton.className = 'button';

rightButton.addEventListener('click', () => {

    clearSlider()

    index = ++index;
    if (index >= picture.length){
        index = 0;
    }

    ITEMS_CONTAINER.appendChild(sliderArray[index]);
    ITEMS_CONTAINER.appendChild(sliderArray[(index + 1) % picture.length]);
    
})

ITEMS_CONTAINER.appendChild(sliderArray[index]);
ITEMS_CONTAINER.appendChild(sliderArray[(index + 1) % picture.length]);
//END MAIN
