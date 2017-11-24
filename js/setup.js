'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupSimilar = document.querySelector('.setup-similar');
var setupListElement = document.querySelector('.setup-similar-list');
var setupWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var surnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});

var getRandomArrayIndex = function (array) {
  return Math.floor(Math.random() * array.length);
};

var getRandomArrayWord = function (arrayOne) {
  return arrayOne[getRandomArrayIndex(arrayOne)];
};

var getNameAndSurname = function (arrayOne, arrayTwo) {
  return arrayOne[getRandomArrayIndex(arrayOne)] + ' ' + arrayTwo[getRandomArrayIndex(arrayTwo)];
};

var wizards = [
  {
    name: getNameAndSurname(names, surnames),
    coatColor: getRandomArrayWord(coatColors),
    eyesColor: getRandomArrayWord(eyesColors)
  },
  {
    name: getNameAndSurname(names, surnames),
    coatColor: getRandomArrayWord(coatColors),
    eyesColor: getRandomArrayWord(eyesColors)
  },
  {
    name: getNameAndSurname(names, surnames),
    coatColor: getRandomArrayWord(coatColors),
    eyesColor: getRandomArrayWord(eyesColors)
  },
  {
    name: getNameAndSurname(names, surnames),
    coatColor: getRandomArrayWord(coatColors),
    eyesColor: getRandomArrayWord(eyesColors)
  }
];

var renderWizard = function () {
  var wizardElement = setupWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

setupListElement.appendChild(fragment);
setupSimilar.classList.remove('hidden');
