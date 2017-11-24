'use strict';

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COATCOLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYESCOLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupSimilar = document.querySelector('.setup-similar');
var setupListElement = document.querySelector('.setup-similar-list');
var setupWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});

var getRandomArrayIndex = function (array) {
  return Math.floor(Math.random() * array.length);
};

var getRandomArrayWord = function (array) {
  return array[getRandomArrayIndex(array)];
};

var getNameAndSurname = function (arrayOne, arrayTwo) {
  return arrayOne[getRandomArrayIndex(arrayOne)] + ' ' + arrayTwo[getRandomArrayIndex(arrayTwo)];
};

var wizards = [
  {
    name: getNameAndSurname(NAMES, SURNAMES),
    coatColor: getRandomArrayWord(COATCOLORS),
    eyesColor: getRandomArrayWord(EYESCOLORS)
  },
  {
    name: getNameAndSurname(NAMES, SURNAMES),
    coatColor: getRandomArrayWord(COATCOLORS),
    eyesColor: getRandomArrayWord(EYESCOLORS)
  },
  {
    name: getNameAndSurname(NAMES, SURNAMES),
    coatColor: getRandomArrayWord(COATCOLORS),
    eyesColor: getRandomArrayWord(EYESCOLORS)
  },
  {
    name: getNameAndSurname(NAMES, SURNAMES),
    coatColor: getRandomArrayWord(COATCOLORS),
    eyesColor: getRandomArrayWord(EYESCOLORS)
  }
];

var renderWizard = function (arrayElement) {
  var wizardElement = setupWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = arrayElement.name;
  wizardElement.querySelector('.wizard-coat').style.fill = arrayElement.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = arrayElement.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

setupListElement.appendChild(fragment);
setupSimilar.classList.remove('hidden');
