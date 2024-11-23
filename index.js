'use strict';

const btn = document.querySelector('#btnSubmit');
const avatar = document.querySelector('#avatarPic');
const nm = document.querySelector('#profileName');
const occ = document.querySelector('#profileOccupation');
const msg = document.querySelector('#profileMessage');

function getForm(input) {
  let result = null,
    tmp = [];
  location.search
    .slice(1)
    .split('&')
    .forEach(function (item) {
      tmp = item.split('=');
      if (tmp[0] === input) result = decodeURIComponent(tmp[1]);
    });
  result = result.split('+').join(' ');
  return result;
}

const updateReview = function () {
  nm.textContent = getForm('name');
  occ.textContent = getForm('occupation');
  msg.textContent = getForm('message');
};

updateReview();
