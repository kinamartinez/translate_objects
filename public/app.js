/**
 * Created by kinamartinez on 9/4/17.
 */
'use strict'

const app = angular.module('flowerApp', [])


app.controller('flowerController', function ($http) {
    const vm = this;
    const flowerArray = [];
    const translationArr = [];
    vm.flowersData = flowerArray;
    vm.translationData = translationArr;

    vm.onTranslate = translateWords;
    vm.onTranslateRussian = translateWordsRussian
    vm.wordData = data;
    vm.data2 = data2;
    vm.showMe = true;
    vm.filteredWords = [];
    const images = [];
    vm.arrImages = images
    const newFilteredWordsWithImages = [];
    vm.newFilteredWithImages = newFilteredWordsWithImages

    $http.get('http://52.51.81.191:85/getFlowers').then(function (response) {
        vm.list = response.data;
        flowerArray.push(vm.list);
        vm.flowersData = flowerArray;

    });

    $http.get('http://52.51.81.191:85/getTranslate').then(function (response) {
        vm.translate = response.data;
        translationArr.push(vm.translate.data);
        vm.translationData = translationArr;
        // console.log(vm.translationData[0].he)

    });
    function addImages() {
        for (let i = 0; i < data.length; i++) {
            images.push({'image': data[i]['image link']})

        }
    }

    addImages();

    function translateWords() {
        for (let elemento of vm.wordData) {
            // console.log(elemento['image link'])
            for (let propiedad of Object.keys(elemento)) {
                // console.log("propiedad " + propiedad)
                elemento[propiedad] = vm.data2.he[elemento[propiedad]]
                if (elemento['image link'] === undefined) {
                    delete elemento['image link']

                }

            }
        }

        vm.filteredWords = vm.wordData;
        angular.merge(vm.newFilteredWithImages,vm.filteredWords, vm.arrImages )
        vm.showMe = false
    }
    function translateWordsRussian() {
        for (let elemento of vm.wordData) {
            // console.log(elemento['image link'])
            for (let propiedad of Object.keys(elemento)) {
                // console.log("propiedad " + propiedad)
                elemento[propiedad] = vm.data2.ru[elemento[propiedad]]
                if (elemento['image link'] === undefined) {
                    delete elemento['image link']

                }

            }
        }

        vm.filteredWords = vm.wordData;
        angular.merge(vm.newFilteredWithImages,vm.filteredWords, vm.arrImages )
        vm.showMe = false
    }
})
;
const data = [
    {
        "name": 'rose',
        "season": "fall",
        "image link": "http://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/photo_9705.jpg?itok=44DBZcZV"
    },
    {
        "name": "Calla lily",
        "season": "summer",
        "image link": "https://www.gardenia.net/rendition.slider_detail/uploads/plant/1429882990-890258a76fbc11f3a/41305.jpg"
    },
    {
        "name": "sunset safari",
        "season": "winter",
        "image link": "http://sierraflowerfinder.blob.core.windows.net/medias/FlowerPictures/792/safari%20sunset1.jpg"
    },
    {
        "name": "hypericum",
        "season": "winter",
        "image link": "http://chrysalflowerfood.com/blog/wp-content/uploads/2014/04/Hot-Pink-Bouquet-Filled-with-Callas-Gomphrena-Hot-Pink-Princess-Roses-and-Bright-Green-Hypericum-Berries-The-French-Bouquet-James-Walton-Photo.jpg"
    },
    {
        "name": "orchid Phalaenopsis",
        "season": "winter to spring",
        "image link": "http://agroflora.ru/wp-content/uploads/2015/08/cvetok-orhidei.jpg"
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


