"use strict";

// variables
const addNewSongBTN = document.querySelector(".add-new-song");
const returnBTN = document.querySelector(".return");
const addSongView = document.querySelector(".add-song-view");
const mainView = document.querySelector(".main-view");
const songParameters = document.querySelector(".song-parameters");
const saveSong = document.querySelector(".save-song");

// parameters
const inputName = document.querySelector(".input-name");
const inputRating = document.querySelector(".input-rating");
const inputBPM = document.querySelector(".input-bpm");
const inputVibe = document.querySelector(".input-vibe");
const inputCover = document.querySelector(".input-cover");
const inputNew = document.querySelector(".input-new");
const inputTone = document.querySelector(".input-tone");
const inputLength = document.querySelector(".input-length");
const inputPopularity = document.querySelector(".input-popularity");

// Music styles
const rockTag = document.querySelector(".rock-tag");
const folkTag = document.querySelector(".folk-tag");
const jazzBluesTag = document.querySelector(".jazz-blues-tag");
const popTag = document.querySelector(".pop-tag");
const punkTag = document.querySelector(".punk-tag");
const edmTag = document.querySelector(".edm-tag");
const metalTag = document.querySelector(".metal-tag");

// Atmosphere tags
const clubTag = document.querySelector(".club-tag");
const festivalTag = document.querySelector(".festival-tag");
const buskingTag = document.querySelector(".busking-tag");
const socialEventTag = document.querySelector(".social-event-tag");
const theaterTag = document.querySelector(".theater-tag");

// Add a New song
// click functions
// Add song interface
addNewSongBTN.addEventListener("click", function () {
  mainView.style.display = "none";
  addSongView.style.display = "inline-block";
});

saveSong.addEventListener("click", function () {
  const song = {
    name: inputName.value,
    rating: inputRating.value,
    BPM: inputBPM.value,
    vibe: inputVibe.value,
    musicStyle: [
      rockTag.checked,
      folkTag.checked,
      jazzBluesTag.checked,
      popTag.checked,
      punkTag.checked,
      edmTag.checked,
      metalTag.checked,
    ],
    popularity: inputPopularity.value,
    atmosphere: [
      clubTag.checked,
      festivalTag.checked,
      buskingTag.checked,
      socialEventTag.checked,
      theaterTag.checked,
    ],
    cover: inputCover.checked,
    new: inputNew.checked,
    tone: inputNew.value,
    length: inputLength.value,
  };
  console.log(song);
});

// Main view interface
returnBTN.addEventListener("click", function () {
  mainView.style.display = "inline-block";
  addSongView.style.display = "none";
});
