'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

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

var FIREBALLCOLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupSubmit = document.querySelector('.setup-submit');
var setupSimilar = document.querySelector('.setup-similar');
var setupListElement = document.querySelector('.setup-similar-list');
var setupWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Checking validity of form
var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

// Showing and closing popup
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function (evt) {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', function () {
    onPopupEscPress();
  });

  // If input with name is valid, closes popup, else - doesn't
  if (userNameInput.validity === true && !userNameInput.onfocus) {
    setupSubmit.addEventListener('click', function () {
      closePopup();
    });

    setupSubmit.addEventListener('keydown', function () {
      if (evt.keyCode === ENTER_KEYCODE) {
        closePopup();
      }
    });
  } else {
    evt.preventDefault();
    openPopup();
  }
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Getting random values
var getRandomArrayIndex = function (array) {
  return Math.floor(Math.random() * array.length);
};

var getRandomArrayWord = function (array) {
  return array[getRandomArrayIndex(array)];
};

var getNameAndSurname = function (arrayOne, arrayTwo) {
  return arrayOne[getRandomArrayIndex(arrayOne)] + ' ' + arrayTwo[getRandomArrayIndex(arrayTwo)];
};

// Creating similar wizards
var wizards = [];

for (var j = 0; j < 4; j++) {
  wizards[wizards.length] = {
    name: getNameAndSurname(NAMES, SURNAMES),
    coatColor: getRandomArrayWord(COATCOLORS),
    eyesColor: getRandomArrayWord(EYESCOLORS)
  };
}

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

// Changing wizard appearance
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomArrayWord(COATCOLORS);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomArrayWord(EYESCOLORS);
});

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.backgroundColor = getRandomArrayWord(FIREBALLCOLORS);
});
