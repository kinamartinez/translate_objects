/**
 * Created by kinamartinez on 9/2/17.
 */
/**
 * Created by kinamartinez on 9/2/17.
 */
const images = []
const data = [
    {
        "name": 'rose',
        "season": "fall",
        "image": "http://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/photo_9705.jpg?itok=44DBZcZV"
    },
    {
        "name": "Calla lily",
        "season": "summer",
        "image": "https://www.gardenia.net/rendition.slider_detail/uploads/plant/1429882990-890258a76fbc11f3a/41305.jpg"
    },
    {
        "name": "sunset safari",
        "season": "winter",
        "image": "http://sierraflowerfinder.blob.core.windows.net/medias/FlowerPictures/792/safari%20sunset1.jpg"
    },
    {
        "name": "hypericum",
        "season": "winter",
        "image": "http://chrysalflowerfood.com/blog/wp-content/uploads/2014/04/Hot-Pink-Bouquet-Filled-with-Callas-Gomphrena-Hot-Pink-Princess-Roses-and-Bright-Green-Hypericum-Berries-The-French-Bouquet-James-Walton-Photo.jpg"
    },
    {
        "name": "orchid Phalaenopsis",
        "season": "winter to spring",
        "image": "http://agroflora.ru/wp-content/uploads/2015/08/cvetok-orhidei.jpg"
    }
];
//
const data2 = {
    "en": {
        "hello": "hello",
        "welcome": "welcome",
        "flower guide": "flower guide"
    },
    "he": {
        "hello": "שלום",
        "welcome": "ברוכים הבאים",
        "flower guide": "מדריך פרחים",
        "summer": "קיץ",
        "winter": "חורף",
        "fall": "סתיו",
        "spring": "אביב",
        "blossom season": "blossom season",
        "rose": "ורדז",
        "Calla lily": "לילך",
        "sunset safari": "לויקודנדרון",
        "hypericum": "פרע",
        "orchid Phalaenopsis": "סחלב"
    },
    "ru": {
        "hello": "Здравствуйте",
        "welcome": "Добро пожаловать!",
        "flower guide": "Цветочный буклет",
        "summer": "Лето",
        "winter": "Зима",
        "fall": "Осень",
        "spring": "Весна",
        "blossom season": "Сезон цветения",
        "rose": "Роза",
        "Calla lily": "Лилия",
        "sunset safari": "Сафари",
        "hypericum": "Зверобой",
        "orchid Phalaenopsis": "Орхидея"
    }
}

function addImages() {
    for (let i=0; i<data.length; i++){
        images.push({'image':data[i].image})

    }
}
addImages()


function test() {

    for (let element of data) {
        // console.log('object => element')
        // console.log(element)
        for (let property of Object.keys(element)) {
            // console.log('property' + ' ' + property)
            element[property] = data2.he[element[property]];
            // console.log(data)
            if (element['image']=== undefined){
              delete element['image']

            }
        }
    }
    return data

}


console.log(test())




