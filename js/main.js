"use strict";

let createDataArray = () => {

  const mapWidth = document.querySelector(`.map__overlay`).clientWidth;
  const typeRoomes = [`palace`, `flat`, `house`, `bungalow`];
  const checkTimes = [`12:00`, `13:00`, `14:00`];
  const features = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
  let newFeatures = [];
  const photos = [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`];
  let newPhotos = [];
  let users = [];

  let getRandomNumber = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };

  const valueX = getRandomNumber(0, mapWidth);
  const valueY = getRandomNumber(130, 650);

  for (let i = 0; i < getRandomNumber(1, features.length); i++) {
    newFeatures.push(features[getRandomNumber(1, features.length)]);
  }

  for (let i = 0; i < getRandomNumber(3, 10); i++) {
    newPhotos.push(photos[getRandomNumber(0, photos.length - 1)]);
  }

  for (let i = 1; i <= 8; i++) {

    const authorData = {
      author: {
        avatar: ``
      },
      offer: {
        title: ``,
        address: `${valueX}, ${valueY}`,
        price: getRandomNumber(1000, 10000),
        type: typeRoomes[getRandomNumber(0, typeRoomes.length - 1)],
        rooms: getRandomNumber(1, 5),
        guests: getRandomNumber(1, 5),
        checkin: checkTimes[getRandomNumber(0, checkTimes.length - 1)],
        checkout: checkTimes[getRandomNumber(0, checkTimes.length - 1)],
        features: newFeatures,
        description: ``,
        photos: newPhotos
      },
      location: {
        X: valueX,
        Y: valueY
      }
    };

    let nums = [1, 2, 3, 4, 5, 6, 7, 8];
    const currentIndex = getRandomNumber(0, nums.length - 1);
    authorData.author.avatar = `img/avatars/user0${nums[currentIndex]}.png`;
    nums = nums.slice(0, currentIndex).concat(nums.slice(currentIndex + 1));

    users.push(authorData);
  }
  return users;
};

let addPinMap = () => {
  const OFFSET_X = 40;
  const OFFSET_Y = 44;

  const map = document.querySelector(`.map`);
  map.classList.remove(`map--faded`);


  let template = document.querySelector(`#pin`).content;
  let pin = template.querySelector(`.map__pin`);
  let mapPins = document.querySelector(`.map__pins`);

  for (let i = 0; i < 8; i++) {
    let element = pin.cloneNode(true);
    element.style.left = `${createDataArray()[i].location.X + OFFSET_X}px`;
    element.style.top = `${createDataArray()[i].location.Y + OFFSET_Y}px`;
    element.children[0].src = createDataArray()[i].author.avatar;
    mapPins.appendChild(element);
  }
};

addPinMap();
